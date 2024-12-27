const mongoose = require('mongoose');

const CategorySchema = new mongoose.Schema({}, { strict: false }); // No schema enforcement for dynamic structure

module.exports = mongoose.model('Category', CategorySchema, 'Category');
