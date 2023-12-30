import express from "express";
import { deleteUser, getAllUser, getSingleUser, updateUser } from "../controllers/userController.js";
const router = express.Router();

// update new User
router.put('/:id', updateUser);

// delete new User
router.delete('/:id', deleteUser);

// getSingle new User
router.get('/:id', getSingleUser);

// getAllTour new User
router.get('/', getAllUser);


export default router;