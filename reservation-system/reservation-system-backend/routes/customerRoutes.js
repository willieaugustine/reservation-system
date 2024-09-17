const express = require('express');
const { getCustomers, createCustomer } = require('../controllers/customerController');
const router = express.Router();

router.get('/', getCustomers);           // Get all customers
router.post('/', createCustomer);        // Create a new customer

module.exports = router;
