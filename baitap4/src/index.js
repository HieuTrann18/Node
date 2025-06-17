const express = require('express')
const app = express()
require('dotenv').config();
const configViewEngine = require('./config/viewEngine')
const webRoute = require('./routes/web')
const connection = require('./config/database')
const port = process.env.PORT || 8080

configViewEngine(app)

app.use('/', webRoute)



app.listen(port, () => {
    console.log(`server is running on http://localhost:${port}`)
})