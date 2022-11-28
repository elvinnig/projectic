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
        html: `<div style='justify-content:center; text-align:center;'><div style='border:1px solid black; border-radius:20px; width:500px;'><div style='margin:20px;'><img src='https://res.cloudinary.com/dfa1bz6nk/image/upload/v1669620283/cghuu7hfcugpwb7rxm94.png' width="150px" alt='Image'/><h1 style='color:#7895B2;'>Hello! ${greet}</h1> <br /><p><b>Greetings from Projectic,</b> <br/> You have successfully created your account.  <br/> We hope that you have a great time using our application <br/> If you have any concerns please contact us ${process.env.EMAIL} <br/> Truly yours <i>Projectic</i> </p></div></div></div>`,
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
router.post('/login', (request, response) => {
  User.findOne({ username: request.body.username }).then((result) => {
    if (result === null) {
      /* return response.status(404).send({
        status: 'Not Found',
      }); */
      return response.send({ status: 'usernameInvalid' });
    } else {
      bcrypt.compare(request.body.password, result.password, (err, match) => {
        //Authenticate if the user is valid
        if (match) {
          return response.status(200).send({
            status: 'User',
            id: result._id,
          });
        } else {
          /* return response.status(406).send({
            status: 'Invalid credentials',
          }); */
          return response.send({ status: 'passwordInvalid' });
        }
      });
    }
  });
});

module.exports = router;
