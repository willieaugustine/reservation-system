const express = require('express');
const { getReservations, createReservation } = require('../controllers/reservationController');
const router = express.Router();

router.get('/', getReservations);           // Get all reservations
router.post('/', createReservation);        // Create a new reservation

module.exports = router;
