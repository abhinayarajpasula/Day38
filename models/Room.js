const mongoose = require('mongoose');
const { validateRoomData } = require('../utils/validators'); // Import your validation function

const roomSchema = new mongoose.Schema({
  roomNo: {
    type: Number,
    required: true,
    unique: true,
  },
  noSeats: {
    type: Number,
    required: true,
  },
  amenities: {
    type: [String],
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  bookings: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Booking',
    },
  ],
});

// Apply validation on save
roomSchema.pre('save', function (next) {
  const validationError = validateRoomData(this);
  if (validationError) {
    return next(new Error(validationError));
  }
  next();
});

module.exports = mongoose.model('Room', roomSchema);