const express = require('express');
const app = express();
const mongoose = require('mongoose');
const movieRouter = require('./router/movieRouter');
require('dotenv').config();

const port = process.env.PORT || 3001;
const mongoUrl = process.env.MONGO_URL;

// Middleware
app.use(express.json());

// MongoDB connection
mongoose.connect(mongoUrl)
  .then(() => console.log("MongoDB is connected"))
  .catch(err => console.log(err));

// Routes
app.use('/api/movie', movieRouter);

// Root route
app.get('/', (req, res) => res.send('Movie API is running'));

// Start server
app.listen(port, () => console.log(`Server is connected to http://localhost:${port}`));
