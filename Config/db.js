const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/product_crud')
    console.log('DB Connected');
  } catch (error) {
    console.log('DB Connection Error', error);
  }
};

module.exports = connectDB;
