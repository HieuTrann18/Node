const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const cors = require('cors');
const mongoose = require('mongoose');
const jobRoutes = require('./routes/jobRoutes');
require('dotenv').config();

app.use(express.json());
app.use(cors());


const connection = async () => {
      try {
           await mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/HieuDB')
           console.log('Connected to MongoDB');
      } catch (err) {
            console.error('Error connecting to MongoDB:', err);
      }
}

connection();

app.use('/api/jobs', jobRoutes);



app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
})



