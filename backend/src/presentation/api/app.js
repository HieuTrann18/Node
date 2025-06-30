const express = require('express')
require('dotenv').config()
const {connectionDatabase} = require('../../infrastructure/database/connection')
const studentRoutes = require('../../infrastructure/routes/studentRoutes')
const courseRoutes = require('../../infrastructure/routes/courseRoutes')
const PORT = process.env.PORT || 8080
const app = express()

app.use(express.json());
connectionDatabase()

app.use('/api/student', studentRoutes)
app.use('/api/course', courseRoutes)


app.listen(PORT, () => {
    console.log('server is running')
})