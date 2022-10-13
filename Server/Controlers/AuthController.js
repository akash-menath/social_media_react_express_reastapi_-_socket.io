import userModel from "../Models/userModel.js";
import bcrypt from "bcrypt";

//registering a new user
export const registerUser = async (req, res) => {
  const { username, password, firstname, lastname } = req.body;
  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(password, salt);

  const newUser = new userModel({
    username,
    password: hashPassword,
    firstname,
    lastname,
  });

  try {
    await newUser.save();
    res.status(200).json(newUser);
  } catch (error) {
    res.status(200).json({ message: error.message });
  }
};

//login user
export const loginUser = async (req, res) => {
    console.log(req.body);
  const { username, password } = req.body;
  console.log(username, password );
  try {
    const user = await userModel.findOne({ username: username });
    if (user) {
        console.log(user);
      const validity = await bcrypt.compare(password, user.password);
      validity
        ? res.status(200).json(user)
        : res.status(400).json("wrong password");
    } else {
      res.status(404).json("user does not exist");
    }
  } catch (error) {
    res.status(200).json({ message: error.message });
  }
};
