const mongoose = require('mongoose')

const CourseSchema = new mongoose.Schema({
    id: { type: String, required: true, unique: true }, 
    name: { type: String, required: true },
    description: { type: String, required: false },
    studentIds: [{ type: String }] 
})

module.exports = mongoose.model('Course', CourseSchema)