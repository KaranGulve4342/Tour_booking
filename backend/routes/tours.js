import express from 'express';
import { createTour, updateTour, deleteTour, getSingleTour, getAllTour} from '../controllers/tourController.js';

const router = express.Router();



// create new Tour
router.post('/', createTour);

// // update new Tour
router.put('/:id', updateTour);

// delete new Tour
router.delete('/:id', deleteTour);

// getSingle new Tour
router.get('/:id', getSingleTour);

// getAllTour new Tour
router.get('/', getAllTour);



export default router;