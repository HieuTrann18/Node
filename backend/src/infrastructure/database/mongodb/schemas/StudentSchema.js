const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema({
    id: { type: String, required: true, unique: true }, 
    name: { type: String, required: true },
    age: { type: Number, required: true },
    score: { type: Number, required: true },
    courseIds: [{ type: String }] 
});

module.exports = mongoose.model('Student', StudentSchema);