const db = require('../config/db');

// Get all events
exports.getEvents = (req, res) => {
  const query = 'SELECT * FROM events';
  db.query(query, (err, results) => {
    if (err) throw err;
    res.json(results);
  });
};

// Create a new event
exports.createEvent = (req, res) => {
  const { name, event_date, start_time, end_time, location, capacity, description } = req.body;
  const query = 'INSERT INTO events (name, event_date, start_time, end_time, location, capacity, description) VALUES (?, ?, ?, ?, ?, ?, ?)';
  db.query(query, [name, event_date, start_time, end_time, location, capacity, description], (err, result) => {
    if (err) throw err;
    res.json({ message: 'Event created successfully', eventId: result.insertId });
  });
};
