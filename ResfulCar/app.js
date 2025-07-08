const express = require('express')
const app = express()
require('dotenv').config()
const connection = require('./src/configs/db')
const PORT = process.env.PORT || 8080
const cors = require('cors')
const carRouter = require('./src/routes/carRoutes')

app.use(express.json())
app.use(cors())

connection()

app.use('/api/car', carRouter)

app.listen(PORT, () => {
    console.log(`server is running on http://localhost:${PORT}`)
})