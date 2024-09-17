const db = require('../config/db');

// Get all customers
exports.getCustomers = (req, res) => {
  const query = 'SELECT * FROM customers';
  db.query(query, (err, results) => {
    if (err) throw err;
    res.json(results);
  });
};

// Create a new customer
exports.createCustomer = (req, res) => {
  const { name, email, phone, special_requests } = req.body;
  const query = 'INSERT INTO customers (name, email, phone, special_requests) VALUES (?, ?, ?, ?)';
  db.query(query, [name, email, phone, special_requests], (err, result) => {
    if (err) throw err;
    res.json({ message: 'Customer created successfully', customerId: result.insertId });
  });
};
