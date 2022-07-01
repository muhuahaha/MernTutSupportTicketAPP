console.log('Server....');

const express = require('express');
// eslint-disable-next-line no-unused-vars
const colors = require('colors');
// eslint-disable-next-line no-unused-vars
const dotenv = require('dotenv').config();
const { errorHandler } = require('./middleware/errorMiddleware');
const connectDB = require('./config/db');

const PORT = process.env.PORT || 8000;

// Connect to database
connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.status(200).json({ message: 'Welcome to the Support Desk API' });
});

// Routes
app.use('/api/users', require('./routes/userRoutes'));

app.use(errorHandler);

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

// const colors = require('colors');

// const { errorHandler } = require('./middleware/errorMiddleware');

// const connectDB = require('./config/db');

// const PORT = process.env.PORT || 8000;
// const app = express();

// connectDB();

// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));

// app.use(errorHandler);

// app.get('/', (req, res) => {
//   res.status(200).json({ message: 'Welcome to the Support Desk API' });
// });
