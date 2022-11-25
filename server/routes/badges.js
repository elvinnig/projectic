const { request } = require('express');
const express = require('express');
const router = express.Router();

//*Models
const Badge = require('../models/Badge');

//TODO: POST
router.post('/', ( request, response ) => {
    let addBadge = new Badge( request.body );
    addBadge.save().then( result => {
        response.status(200).send({ status: 'You added new Badge' });
    });
});

//TODO: GET badges/:id
router.get('/:badgesId', (request, response) => {
    Badge.findOne(
        { _id: request.params.badgesId }
        )
    .then( (result) => {
        console.log( result );
        if( typeof result === 'object' ){
            response.status(202).send( result );
        }
    });
});

//TODOl: PATCH badges/:id
Badge.patch('/:badgesId', ( request, response ) => {
    const badgeId = request.params.badgesId;
    User.updateOne(
        { _id: badgeId }, 
        { $set: { ...request.body } })
    .then( result => {
        if( result.modifiedCount === 1 ){
            response.status(200).send({ status: "Badge has been updated" });
        }
    });
});

//TODO: DELETE badges/:id
router.delete('/:badgesId', (request,response)=>{
    Client.deleteOne({_id: request.params.badgesId})
    .then(result => {
        if (result.deletedCount === 1 ){
            response.status(200).send({status:'Client removed'})
    } else {
        response.status(404).send({status:'This client is already deleted'})
        return 
        }
    })
});

module.exports = router;