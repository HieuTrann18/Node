const express = require('express')
const app = express()
const port = 3000
const cors = require('cors')
const connection = require('./src/config/database')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }));


app.get('/api/product', async (req, res) => {
  try {
    const [results, fields] = await connection.query('SELECT * FROM product')
    console.log('check data: ', results)
    res.json(results)
  } catch (err) {
    console.log(err)
  }
})

app.post('/api/product', async (req, res) => {
  const { title, price, idate, quantity } = req.body;

  if(!title || !price || !idate || !quantity){
    res.status(400).json({ message: 'Missing required fields'})
  }

  try {
    const [result] = await connection.query('INSERT INTO product (Title, Price, IDate, Quantity) VALUES (?,?,?,?)',
      [title, price, idate, quantity]
    )
    res.status(201).json({ message: 'Product added successfully', productId: result.insertId})
  } catch (err) {
    res.status(500).json({message: 'error', err})
  }

});


app.listen(port, () => {
  console.log(`server is running on http://localhost:${port}`)
})