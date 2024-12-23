const express = require('express');

// Environment Variables
const morgan = require('morgan');
const cors = require('cors');
const bodyParse = require('body-parser')

const connectDB = require('./Config/db');

const { readdirSync } = require('fs');

const app = express();

// Connect to DB
connectDB();

// use Morgan & Cors
app.use(morgan('dev'));
app.use(cors());
app.use(bodyParse.json({ limit: '10mb' }))

// Routes
readdirSync('./Routes').map((file) => {
  const route = require('./Routes/' + file);
  app.use('/api', route);
});

// Routes Test
app.get('/', (req, res) => {
  res.send('Hello World!');
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
