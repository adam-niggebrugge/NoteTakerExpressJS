/**
 * Boiler plate script for server creation.
 */
const express = require('express');
const path = require('path');
const apiRoutes = require('./routes/apiRoutes');  //from homework example
const htmlRoutes = require('./routes/htmlRoutes');

//Initialize the app and create a port
const app = express();
const PORT = process.env.PORT || 3036;

// Set up body parsing, static, and route middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

// Start the server on the port
app.listen(PORT, () => console.log(`App listening on port ${PORT}, Rodger that!`));