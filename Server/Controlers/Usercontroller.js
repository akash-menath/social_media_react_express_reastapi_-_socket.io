import userModel from "../Models/userModel.js";
import bcrypt from "bcrypt";

//get user
export const getUser = async (req, res) => {
  const id = req.params.id;

  try {
    const user = await userModel.findById(id);

    if (user) {
      const { password, ...otherDetails } = user._doc;
      res.status(200).json(otherDetails);
    } else {
      res.status(500).json("no such user");
    }
  } catch (error) {
    res.status(500).json(error);
  }
};
//update user
export const updateUser = async (req, res) => {
  const id = req.params.id;
  const { currentUserId, currentUserAdminStatus, password } = req.body;

  if (currentUserId == id || currentUserAdminStatus) {
    try {
      if (password) {
        const salt = await bcrypt.genSalt(10);
        req.body.password = await bcrypt.hash(password, salt);
      }
      const user = await userModel.findByIdAndUpdate(id, req.body, {
        new: true,
      });
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json(error);
    }
  } else {
    res.status(403).json("acess denied ! you can only update your own profile");
  }
};
//delete user
export const deleteUser = async (req, res) => {
  const id = req.params.id;
  const { currentUserId, currentUserAdminStatus } = req.body;
  if (currentUserId === id || currentUserAdminStatus) {
    try {
      await userModel.findByIdAndDelete(id);
      res.status(200).json("User  deleted sucessfully");
    } catch (error) {
      res.status(500).json(error);
    }
  } else {
    res.status(403).json("acess denied ! you can only Delete your own profile");
  }
};
//follow a user
export const followUser = async (req, res) => {
  const id = req.params.id;
  const { currentUserId } = req.body;
  if (currentUserId === id) {
    res.status(403).json("Action forbidden");
  } else {
    try {
      const followUser = await userModel.findById(id);
      const followingUser = await userModel.findById(currentUserId);
      if (!followUser.followers.includes(currentUserId)) {
        await followUser.updateOne({ $push: { followers: currentUserId } });
        await followingUser.updateOne({ $push: { following: id } });
        res.status(200).json("user followed");
      } else {
        res.status(403).json("user already followed by you");
      }
    } catch (error) {
      res.status(500).json(error);
    }
  }
};
//unfollow a user
export const unFollowUser = async (req, res) => {
  const id = req.params.id;
  const { currentUserId } = req.body;
  if (currentUserId === id) {
    res.status(403).json("Action forbidden");
  } else {
    try {
      const followUser = await userModel.findById(id);
      const followingUser = await userModel.findById(currentUserId);
      if (followUser.followers.includes(currentUserId)) {
        await followUser.updateOne({ $pull: { followers: currentUserId } });
        await followingUser.updateOne({ $pull: { following: id } });
        res.status(200).json("user unFollowed");
      } else {
        res.status(403).json("user  not followed by you");
      }
    } catch (error) {
      res.status(500).json(error);
    }
  }
};