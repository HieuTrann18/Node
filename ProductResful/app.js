const express = require('express')
const app = express()
const cors = require('cors')
require('dotenv').config()
const PORT = process.env.PORT
const connection = require('./src/config/DBConnection')
const ProductRoutes = require('./src/routes/ProductRoutes')

connection()
app.use(express.json())
app.use(cors())
app.use('/api/product', ProductRoutes)

app.listen(PORT, () => {
    console.log(`server running on http://localhost:${PORT}`)
})