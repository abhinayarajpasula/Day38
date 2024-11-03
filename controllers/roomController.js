const Room = require("../models/Room");

// Get all rooms
exports.getAllRooms = async (req, res) => {
    try {
        const rooms = await Room.find(); // Fetch all rooms from the database
        res.status(200).json(rooms);
    } catch (err) {
        console.error("Error fetching rooms:", err);
        res.status(500).json({ message: "Error fetching rooms" });
    }
};

// Create a new room
exports.createRoom = async (req, res) => {
    console.log("Incoming request body:", req.body); // Log the request body
    try {
        const newRoom = new Room(req.body); // Create a new room instance
        await newRoom.save(); // Save the new room to the database
        res.status(201).json({ message: "Room created successfully", room: newRoom });
    } catch (err) {
        console.error("Error creating room:", err);
        res.status(400).json({ message: err.message }); // Return error message if validation fails
    }
};