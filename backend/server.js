const express = require('express');
const dotenv = require('dotenv').config();
const app = express();
const cors = require('cors');
const { errorHandler } = require('./middleware/errorMiddleware');
const connectDB = require('./config/db');
const PORT = process.env.PORT || 5000;

connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Cors Setup
app.use(cors());

app.use('/api/products', require('./routes/productRoutes'));
app.use('/api/categories', require('./routes/categoryRoutes'));

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
