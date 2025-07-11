const mongoose = require('mongoose')
require('dotenv').config()

const connection = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URI)   
        console.log('connected mongodb')
    }catch(err){
        console.log('connection error', err)
    }
}

module.exports = connection