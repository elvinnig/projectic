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

//* Middleware
server.use( morgan('dev') );
server.use( cors() );
server.use( bodyParser.json() );
server.use( helmet() );

//*Routes for files
const AuthRouter = require('./routes/auth');
const BadgeRouter = require('./routes/badges');
const UserRouter = require('./routes/users');
const FileTypeRouter = require('./routes/filetypes');
const FileRouter = require('./routes/files');

//*Routes
server.use('/api/v1/auth', AuthRouter );
server.use('/api/v1/badges', BadgeRouter);
server.use('/api/v1/users', UserRouter);
server.use('/api/v1/filetypes', FileTypeRouter);
server.use('/api/v1/files', FileRouter);

//*Server
server.listen(
    port,
    () => {
        console.log(`Server running on port ${port}`);
    }
);

