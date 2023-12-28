import express from 'express';
import { createTour, getAllTour, updateTour, deleteTour, getSingleTour } from '../controllers/tourController.js';

const router = express.Router();



// create new Tour
router.post('/', createTour);

// update new Tour
router.put('/', updateTour);

// delete new Tour
router.delete('/', deleteTour);

// getSingle new Tour
router.get('/', getSingleTour);

// getAllTour new Tour
router.get('/', getAllTour);



export default router;