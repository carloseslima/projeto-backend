import express from "express";
const router = express.Router();

import { createUser, deleteUser, getAllUsers, getOneUser, updateUser } from "./handlers.js";

router.route("/").get(getAllUsers).post(createUser).put(updateUser).delete(deleteUser);

router.route("/outro").get(getOneUser)

export default router