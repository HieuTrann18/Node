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

app.put('/api/product/:id', async (req, res) => {
  const { id } = req.params;
  const { title, price, idate, quantity } = req.body;
  if (!title || !price || !idate || !quantity) {
    return res.status(400).json({ message: 'Missing required fields' });
  }
  try {
    const [result] = await connection.query(
      'UPDATE product SET Title = ?, Price = ?, IDate = ?, Quantity = ? WHERE id = ?',
      [title, price, idate, quantity, id]
    );
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.json({ message: 'Product updated successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Update failed', err });
  }
});

app.delete('/api/product/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const [result] = await connection.query(
      'DELETE FROM product WHERE id = ?',
      [id]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Product not found' });
    }

    res.json({ message: 'Product deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Delete failed', err });
  }
});


app.listen(port, () => {
  console.log(`server is running on http://localhost:${port}`)
})
