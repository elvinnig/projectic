const express = require('express');
const router = express.Router();

//*Models
const User = require('../models/User');

//TODO: GET users/:userId
router.get('/:userId', (request, response) => {
  User.findOne({ _id: request.params.userId }, { password: 0 }).then(
    (result) => {
      console.log(result);
      if (typeof result === 'object') {
        response.status(202).send(result);
      }
    }
  );
});

//TODO: GET username
router.get('/', (request, response) => {
  User.find({}, 'username').then((result) => {
    console.log(result);
    if (typeof result === 'object') {
      response.send(result);
    }
  });
});

//TODOl: PATCH users/:userId
router.patch('/:userId', (request, response) => {
  const addUserId = request.params.userId;
  User.updateOne({ _id: addUserId }, { $set: { ...request.body } }).then(
    (result) => {
      if (result.modifiedCount === 1) {
        response.status(200).send({ status: 'User has been updated' });
      }
    }
  );
});

module.exports = router;
