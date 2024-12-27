const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Category = require('./models/categoryModel');
const Course = require('./models/courseModel');

dotenv.config();

const app = express();
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error(err));

// Route to fetch data from the Category collection
app.get('/categories', async (req, res) => {
    try {
        const categories = await Category.find();
        res.json(categories);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

app.get('/courses', async (req, res) => {
    try {
        const courses = await Course.find(); // Fetches all documents in the `Course` collection
        res.json(courses);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
