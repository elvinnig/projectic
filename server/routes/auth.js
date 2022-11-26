//* Express
const express = require('express');
const router = express.Router();
//*Models
const User = require('../models/User');
//*Bcrypt
const bcrypt = require('bcrypt');
//* env configuration
const dotenv = require('dotenv');
dotenv.config();
//* transporter
const transporter = require('../modules/transporter');

//TODO: POST users/register
router.post('/register', async (request, response) => {
    /* 
      TODO
      Admin will register the new employee
      send an email to the employee 
      */
    const hashedPassword = await bcrypt.hash(request.body.password, 10);
    const newUser = new User({
      ...request.body,
      password: hashedPassword,
      isAdmin: false,
      qrCode: `${request.body.firstname}_${request.body.lastname}`,
    });
    let greet = request.body.username;
    newUser.save().then((result) => {
      // TODO send email
      transporter.sendMail(
        {
          from: process.env.EMAIL,
          to: request.body.email,
          subject: 'User Account Set up',
          text: `Hello ${greet} Greetings from Projectic.Co, \n\n Your account has been created. \n Email: ${request.body.email}\n
        Password: secret \n\n Kindly update your password immediately \n\n\n\n Truly yours\n Admin`,
        },
        function (error, info) {
          if (error) {
            console.log(error);
          } else {
            console.log('Email sent: ' + info.response);
          }
        }
      );
      response.send({ status: 'New User Added!' });
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