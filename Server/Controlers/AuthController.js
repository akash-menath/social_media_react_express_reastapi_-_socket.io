import userModel from "../Models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

//registering a new user
export const registerUser = async (req, res) => {
  console.log(req.body);
  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(req.body.password, salt);
  req.body.password = hashPassword;
  const newUser = new userModel(req.body);
  const { username } = req.body;

  try {
    const oldUser = await userModel.findOne({ username });

    if (oldUser) {
      return res.status(400).json({ message: "username is already registred" });
    }
    const user = await newUser.save(); //
    const token = jwt.sign(
      {
        username: user.username,
        id: user._id,
      },
      process.env.JWT_KEY,
      { expiresIn: "1h" }
    );
    res.status(200).json({ user, token });
  } catch (error) {
    res.status(200).json({ message: error.message });
  }
};

//login user
export const loginUser = async (req, res) => {
  console.log(req.body);
  const { username, password } = req.body;
  console.log(username, password);
  try {
    const user = await userModel.findOne({ username: username });
    if (user) {
      console.log(user);
      const validity = await bcrypt.compare(password, user.password);

      if (!validity) {
        res.status(400).json("wrong password");
      } else {
        const token = jwt.sign(
          {
            username: user.username,
            id: user._id,
          },
          process.env.JWT_KEY,
          { expiresIn: "1h" }
        );
        res.status(200).json({user,token});
      }

    } else {
      res.status(404).json("user does not exist");
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
