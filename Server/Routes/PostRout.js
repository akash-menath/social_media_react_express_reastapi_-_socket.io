import express from "express";
import { createPost, deletePost, getPost, getTImelinePost, likePost, updatePost } from "../Controlers/PostController.js";

const router = express.Router();

router.post("/",createPost);
router.get("/:id",getPost)
router.put('/:id',updatePost)
router.delete('/:id',deletePost)
router.put('/:id/like',likePost);
router.get('/:id/timeline',getTImelinePost);

export default router;
