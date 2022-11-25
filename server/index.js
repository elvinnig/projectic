//* Express
const express = require('express');
const server = express();

//* Port
const port = 8000;

//*Imports
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');

//TODO: Database connection ( for the meantime )
mongoose.connect('mongodb://127.0.0.1:27017/projectic');

//* Midleware
server.use( morgan('dev') );
server.use( cors() );
server.use( bodyParser.json() );
server.use( helmet() );

//*Routes
const BadgeRouter = require('./routes/badges');

server.use('/api/v1/badges', BadgeRouter);

//*Server
server.listen(
    port,
    () => {
        console.log(`Server running on port ${port}`);
    }
)