//* Express
const express = require('express');
const router = express.Router();

//* env configuration
const dotenv = require('dotenv');
dotenv.config();
//* transporter
const transporter = require('../modules/transporter');

//TODO: POST users/register
router.post('/message', async (request, response) => {  

  // TODO send email
  transporter.sendMail(
    {
      from: request.body.email,
      to: process.env.EMAIL,
      subject: 'Message from a user ',
      text: request.body.message,
    },
    function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' +  transporter.sendMail(
          {
            from: process.env.EMAIL,
            to: request.body.email,
            subject: '@projectic notification',
            text: 'We appreciate you messaging us...',
          },
          function (error, info) {
            if (error) {
              console.log(error);
            } else {
              console.log('Email sent: ' + info.response);
            }
          }
        ));
      }
    }
  );
  response.send({ status: 'New Message Added!' });
});

module.exports = router;
