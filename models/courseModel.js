const mongoose = require('mongoose');

const CourseSchema = new mongoose.Schema({}, { strict: false }); // No schema enforcement

module.exports = mongoose.model('Course', CourseSchema, 'Course');
