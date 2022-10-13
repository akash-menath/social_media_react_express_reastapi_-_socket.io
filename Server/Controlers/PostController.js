//  import postmodel from "../Models/PostModel.js";
import PostModel from "../Models/PostModel.js";
import mongoose from "mongoose";
import { loginUser } from "./AuthController.js";
import userModel from "../Models/userModel.js";

//crerate new post
export const createPost = async (req, res) => {
  console.log(1111111111111);
  const newPost = new PostModel(req.body);
  try {
    await newPost.save();
    res.status(200).json("new post created");
  } catch (error) {
    res.status(500).json(error);
  }
};
//get posts
export const getPost = async (req, res) => {
  const id = req.params.id;
  try {
    const post = await PostModel.findById(id);
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json(error);
  }
};
//update a post
export const updatePost = async (req, res) => {
  const postId = req.params.id;
  const { userId } = req.body;

  try {
    const post = await PostModel.findById(postId);
    console.log(post);
    if (post.userId === userId) {
      await post.updateOne({ $set: req.body });

      res.status(200).json("updated sucessfully");
    } else {
      res.status(403).json("action forbidden");
    }
  } catch (error) {
    res.status(500).json(error);
  }
};
//delete a post
export const deletePost = async (req, res) => {
  const postId = req.params.id;
  const { userId } = req.body;
  try {
    const post = await PostModel.findById(postId);

    if (post.userId == userId) {
      await post.deleteOne();
      res.status(200).json("deleted sucessfully");
    } else {
      res.status(403).json("acess denied");
    }
  } catch (error) {
    res.status(500).json(error);
  }
};
//like and unlike

export const likePost = async (req, res) => {
  const postId = req.params.id;
  const { userId } = req.body;
  try {
    const post = await PostModel.findById(postId);
    if (!post.likes.includes(userId)) {
      await post.updateOne({ $push: { likes: userId } });
      res.status(200).json("liked");
    } else {
      await post.updateOne({ $pull: { likes: userId } });
      res.status(200).json("unliked");
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

// get timeline post
export const getTImelinePost = async (req, res) => {
  const userId = req.params.id;
  try {
    const currentUserPosts = await PostModel.find({ userId: userId });
    const followingPost = await userModel.aggregate([
      {
        $match: {
          _id: new mongoose.Types.ObjectId(userId),
        },
      },
      {
        $lookup: {
          from: "posts",
          localField: "following",
          foreignField: "userId",
          as: "followingPosts",
        },
      },
      {
        $project: {
          followingPosts: 1,
          _id: 1,
        },
      },
    ]);
    // console.log(followingPost[0].followingPosts);
    res
      .status(200)
      .json(currentUserPosts.concat(...followingPost[0].followingPosts)
      .sort((a, b) => {
        return b.createdAt - a.createdAt;
      }))
      
  } catch (error) {
    res.status(500).json(error);
  }
};
