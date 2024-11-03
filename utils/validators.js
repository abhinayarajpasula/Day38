function validateRoomData(data) {
    if (!data.roomNo || typeof data.roomNo !== 'number') {
      return 'Room number is required and must be a number.';
    }
    if (!data.noSeats || typeof data.noSeats !== 'number') {
      return 'Number of seats is required and must be a number.';
    }
    if (!Array.isArray(data.amenities) || data.amenities.length === 0) {
      return 'Amenities must be an array and cannot be empty.';
    }
    if (!data.price || typeof data.price !== 'number') {
      return 'Price is required and must be a number.';
    }
    return null; // Return null if validation passes
  }
  
  module.exports = {
    validateRoomData,
  };  