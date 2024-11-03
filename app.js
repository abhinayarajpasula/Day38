require('dotenv').config({ path: './config/config.env' });
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const roomRoutes = require('./routes/roomRoutes');
const bookingRoutes = require('./routes/bookingRoutes');
const mongoose = require('mongoose');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const port = process.env.PORT || 4000;

app.use('/api/rooms', roomRoutes);
app.use('/api/bookings', bookingRoutes);

app.get('/', (req, res) => {
  res.json({ output: 'Homepage' });
});

app.listen(port, () => console.log(`Your app is running on port ${port}`));

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected successfully'))
  .catch(err => console.log(err));