import express from "express";
import { deleteUser, getAllUser, getSingleUser, updateUser } from "../controllers/userController.js";
const router = express.Router();

import { verifyAdmin, verifyUser } from "../utils/verifyToken.js";

// update new User
router.put('/:id',verifyUser, updateUser);

// delete new User
router.delete('/:id',verifyUser, deleteUser);

// getSingle new User
router.get('/:id',verifyUser, getSingleUser);

// getAllTour new User
router.get('/',verifyAdmin, getAllUser);


export default router;