const express = require("express");
const bookingController = require("../controllers/bookingController"); 
const router = express.Router();

// Route to get all bookings
router.get("/", bookingController.getAllBookings); // Use the controller method

// Route to create a new booking
router.post("/", bookingController.createBooking); // Use the controller method

// Export the router
module.exports = router;