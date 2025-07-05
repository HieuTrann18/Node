const mongoose = require('mongoose')
require('dotenv').config()

const connection = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URI)
        console.log('connected mongoDB')
    }catch(err){
        console.log('connection fail', err)
    }
}

module.exports = connection