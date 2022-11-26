//* Express
const express = require('express');
const router = express.Router();
//*Models
const User = require('../models/User');
//*Bcrypt
const bcrypt = require('bcrypt');


//TODO: POST users/register
router.post('/register', async ( request, response ) => {
    //*Hashing password
    const hashedPassword = await bcrypt.hash( request.body.password, 10 );
    const newUser = new User({
        ...request.body,
        password: hashedPassword
    });
    newUser.save().then( result => {
        response.send({ status: 'User has been created', id:result._id });
    });
});


//TODO: POST users/login
router.post('/login', ( request, response ) => {
    User.findOne({ username: request.body.username }).then( result => {
        if(result === null){
            response.status(404).send({
                status : 'Not Found'
            })
        }else{
        bcrypt.compare( request.body.password, result.password, ( err, match ) => {
            //Authenticate if the user is valid
            if( match ){
                response.status(200).send({ 
                    status: 'User', 
                    id: result._id,
                });
            }
            else{
                response.status(406).send({
                    status:'Invalid credentials'
                });
            }    
        });
    }
    });
});

module.exports = router;