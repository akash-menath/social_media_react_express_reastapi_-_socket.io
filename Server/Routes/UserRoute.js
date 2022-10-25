import express from "express";
import authMiddleWare from "../MiddleWare/AuthMiddleware.js";
import {
  deleteUser,
  followUser,
  getAllUser,
  getUser,
  unFollowUser,
  updateUser,
} from "../Controlers/Usercontroller.js";

const router = express.Router();
router.get("/", getAllUser);
router.get("/:id", getUser);
router.put("/:id", authMiddleWare, updateUser);
router.delete("/:id", authMiddleWare, deleteUser);
router.put("/:id/follow", authMiddleWare, followUser);
router.put("/:id/unFollow", authMiddleWare, unFollowUser);

export default router;
