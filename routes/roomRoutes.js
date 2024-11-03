const express = require("express");
const roomController = require("../controllers/roomController"); 
const router = express.Router();

// Route to get all rooms
router.get("/", roomController.getAllRooms); // Use the controller method

// Route to create a new room
router.post("/", roomController.createRoom); // Use the controller method

// Export the router
module.exports = router;