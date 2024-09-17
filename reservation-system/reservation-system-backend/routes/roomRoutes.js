const express = require('express');
const { getRooms, createRoom } = require('../controllers/roomController');
const router = express.Router();

router.get('/', getRooms);           // Get all rooms
router.post('/', createRoom);        // Create a new room

module.exports = router;
