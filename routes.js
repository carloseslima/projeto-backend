import express from "express";
import { createUser, deleteUser, getAllUsers, updateUser } from "./handlers";
const router = express.Router();

router.route("/").get(getAllUsers).post(createUser).put(updateUser).delete(deleteUser);

router.route("/outro").get((req, res) => {
  res.json({status: "success"});
})

export default router