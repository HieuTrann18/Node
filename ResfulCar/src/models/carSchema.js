const mongoose = require('mongoose')

const carSchema = new mongoose.Schema({
    name: {type: String},
    brand: {type: String},
    price: {type: Number},
    quantity: {type: Number}
})

module.exports = mongoose.model('Car', carSchema)