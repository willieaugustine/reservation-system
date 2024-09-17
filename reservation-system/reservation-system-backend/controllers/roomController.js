const db = require('../config/db');

// Get all rooms
exports.getRooms = (req, res) => {
  const query = 'SELECT * FROM rooms';
  db.query(query, (err, results) => {
    if (err) throw err;
    res.json(results);
  });
};

// Create a new room
exports.createRoom = (req, res) => {
  const { room_type, price_per_night, max_capacity, availability, description } = req.body;
  const query = 'INSERT INTO rooms (room_type, price_per_night, max_capacity, availability, description) VALUES (?, ?, ?, ?, ?)';
  db.query(query, [room_type, price_per_night, max_capacity, availability, description], (err, result) => {
    if (err) throw err;
    res.json({ message: 'Room created successfully', roomId: result.insertId });
  });
};
