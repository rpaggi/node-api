/**
 * File: server.js
 * Description: Responsible to start the Node.Js service to serve the API
 * Created at: 12/03/2018
 */
 
require('dotenv').config()
const express     = require('express'); 
const app         = express();
const bodyParser  = require('body-parser');
 
/** 
 * Configure application to use body-parser
 */
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
 
/** 
 * Defines the port which application will serve, can user from environment or use 8000 as default 
 */
const port = process.env.PORT || 8000; 
 
/** 
 * Load the api routes
 */
app.use('/api', require('./routes/api.js'));
 
/**
 * Starting the server
 */
app.listen(port);
console.log('Starting the application at port ' + port);