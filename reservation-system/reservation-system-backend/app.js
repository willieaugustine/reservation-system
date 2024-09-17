const express = require('express');
const bodyParser = require('body-parser');
const roomRoutes = require('./routes/roomRoutes');
const eventRoutes = require('./routes/eventRoutes');
const reservationRoutes = require('./routes/reservationRoutes');
const customerRoutes = require('./routes/customerRoutes');

// Initialize express app
const app = express();

// Use body-parser to parse JSON requests
app.use(bodyParser.json());

// Define API routes
app.use('/api/rooms', roomRoutes);
app.use('/api/events', eventRoutes);
app.use('/api/reservations', reservationRoutes);
app.use('/api/customers', customerRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
