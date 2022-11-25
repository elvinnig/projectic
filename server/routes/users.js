const { request } = require('express');
const express = require('express');
const router = express.Router();

//*Models
const User = require('../models/User');

//TODO: GET users/:id
router.get('/:usersId', (request, response) => {
    User.findOne(
        { _id: request.params.usersId },
        { password: 0 }
        )
    .then( (result) => {
        console.log( result );
        if( typeof result === 'object' ){
            response.status(202).send( result );
        }
    });
});

//TODOl: PATCH users/:id
router.patch('/:usersId', ( request, response ) => {
    const userId = request.params.usersId;
    User.updateOne(
        { _id: userId }, 
        { $set: { ...request.body } })
    .then( result => {
        if( result.modifiedCount === 1 ){
            response.status(200).send({ status: "User has been updated" });
        }
    });
});

module.exports = router;