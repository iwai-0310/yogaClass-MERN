// Load environment variables from .env file
require('dotenv').config();

// Import the connectDB 
const connectDB = require("./db/connect");

// Import the  model 
const card = require('./models/Card');

// Load card data from a JSON file
const jsonProducts = require('./cardsData.json');

// Define an asynchronous function to start the database connection
const start = async () => {
  try {
    // Connect to the MongoDB database using the provided URI
    await connectDB(process.env.MONGO_URI);

    // Delete existing cards 
    await card.deleteMany();

    // Create new care records based on the data in jsonProducts
    await card.create(jsonProducts);

    // Log  message
    console.log('Established database connection');

    // Exit the process with success
    process.exit(0);
  } catch (err) {
    // Log  errors 
    console.log(err);
    process.exit(1);
  }
};

// Call the start function to initiate the database setup
start();
