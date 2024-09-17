const express = require('express');
const { getEvents, createEvent } = require('../controllers/eventController');
const router = express.Router();

router.get('/', getEvents);           // Get all events
router.post('/', createEvent);        // Create a new event

module.exports = router;
