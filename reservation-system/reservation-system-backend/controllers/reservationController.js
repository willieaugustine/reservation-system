const db = require('../config/db');

// Get all reservations
exports.getReservations = (req, res) => {
  const query = 'SELECT * FROM reservations';
  db.query(query, (err, results) => {
    if (err) throw err;
    res.json(results);
  });
};

// Create a new reservation
exports.createReservation = (req, res) => {
  const { customer_id, item_id, reservation_type, check_in_date, check_out_date, event_date, ticket_type, status } = req.body;
  const query = 'INSERT INTO reservations (customer_id, item_id, reservation_type, check_in_date, check_out_date, event_date, ticket_type, status) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';
  db.query(query, [customer_id, item_id, reservation_type, check_in_date, check_out_date, event_date, ticket_type, status], (err, result) => {
    if (err) throw err;
    res.json({ message: 'Reservation created successfully', reservationId: result.insertId });
  });
};
