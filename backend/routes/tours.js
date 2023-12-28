import express from 'express';
import { createTour } from '../controllers/tourController.js';

const router = express.Router()

// create new Tour
router.post('/', createTour)

export default router;