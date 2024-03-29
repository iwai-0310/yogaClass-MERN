// Import  Mongoose 
const mongoose = require('mongoose');

// Define a function to connect with database
const connectDB = (url) => {
  // Use  provided URL to make connection
  return mongoose.connect(url, {
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
  });
};

// Export  connectDB 
module.exports = connectDB;
