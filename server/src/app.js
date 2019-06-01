//Require Dependencies
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

//Define PORT to use
const PORT = process.env.PORT || 8081;

// Initialize Express 
const app = express();

// Config Middleware
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

// App setup
app.use(morgan("combined"));
app.use(cors());


app.listen(PORT, function() {
    console.log(`App is running on port ${PORT}!`)
});
