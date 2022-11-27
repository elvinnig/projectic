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

//? GET all badges by userID
router.get('/:userID', (request, response) => {
    Badge.find( {userID: request.params.userID } )
    .then( (result) => {
        console.log( result );
        if( typeof result === 'object' ){
            response.status(202).send( result );
        }
    });
});
//TODO: GET badges/:badgeId
router.get('/:badgeId', (request, response) => {
    Badge.findOne(
        { _id: request.params.badgeId }
        )
    .then( (result) => {
        console.log( result );
        if( typeof result === 'object' ){
            response.status(202).send( result );
        }
    });
});

//TODO: PATCH badges/:badgeId
router.patch('/:badgeId', ( request, response ) => {
    const addBadgeId = request.params.badgeId;
    Badge.updateOne(
        { _id: addBadgeId }, 
        { $set: { ...request.body } })
    .then( result => {
        if( result.modifiedCount === 1 ){
            response.status(200).send({ status: "Badge has been updated" });
        }
    });
});

//TODO: DELETE badges/:badgeId
router.delete('/:badgeId', (request,response)=>{
    Badge.deleteOne({_id: request.params.badgeId})
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