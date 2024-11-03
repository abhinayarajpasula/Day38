const Booking = require("../models/Booking");

// Get all bookings
exports.getAllBookings = async (req, res) => {
    try {
        const bookings = await Booking.find(); // Fetch all bookings from the database
        res.status(200).json(bookings);
    } catch (err) {
        console.error("Error fetching bookings:", err);
        res.status(500).json({ message: "Error fetching bookings" });
    }
};

// Create a new booking
exports.createBooking = async (req, res) => {
    console.log("Incoming request body:", req.body); // Log the request body
    try {
        const newBooking = new Booking(req.body); // Create a new booking instance
        await newBooking.save(); // Save the new booking to the database
        res.status(201).json({ message: "Booking created successfully", booking: newBooking });
    } catch (err) {
        console.error("Error creating booking:", err);
        res.status(400).json({ message: err.message }); // Return error message if validation fails
    }
};