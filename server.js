/**
 * Boiler plate script for server creation.
 */
const express = require('express');
const apiRoutes = require('./routes/apiRoutes');  //from homework example
const htmlRoutes = require('./routes/htmlRoutes');

//Initialize the app and create a port
const app = express();
//Heroku has many ports availiable and should determine itgit 
//Heroku sets an environmental variable nice feature where it can 
//node has the ability to access environmental variables through process.env
//priority is order left to right, dynamically open
const PORT = process.env.PORT || 3006;//locally have 3006 port to open and listen

// Set up body parsing, static, and route middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));
//Now this will drive the server js to connect all routes prefixed with API to the apiRoutes.js
app.use('/api/notes', apiRoutes);
app.use('/', htmlRoutes);

// Start the server on the port

app.listen(PORT, () => console.log(`App listening on port ${PORT}, Rodger that!`));