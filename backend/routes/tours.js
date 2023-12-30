import express from 'express';
import { createTour, updateTour, deleteTour, getSingleTour, getAllTour, getTourBySearch, getFeaturedTour, getTourCount} from '../controllers/tourController.js';

const router = express.Router();



// create new Tour
router.post('/', createTour);

// update new Tour
router.put('/:id', updateTour);

// delete new Tour
router.delete('/:id', deleteTour);

// getSingle new Tour
router.get('/:id', getSingleTour);

// getAllTour new Tour
router.get('/', getAllTour);

// get tour by search
router.get("/search/getTourBySearch", getTourBySearch)

// get featured tour
router.get("/search/getFeaturedTours", getFeaturedTour)

// get tour count
router.get("/search/getTourCount", getTourCount);

export default router;