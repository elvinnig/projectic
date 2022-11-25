const { request } = require('express');
const express = require('express');
const router = express.Router();

//*Models
const File = require('../models/File');

//TODO: POST
router.post('/', ( request, response ) => {
    let addFIle = new File( request.body );
    addFIle.save().then( result => {
        response.status(200).send({ status: 'You added new File' });
    });
});

//TODO: GET files/:filesId
router.get('/:filesId', (request, response) => {
    File.findOne(
        { _id: request.params.filesId }
        )
    .then( (result) => {
        console.log( result );
        if( typeof result === 'object' ){
            response.status(202).send( result );
        }
    });
});

//TODO: PATCH files/:filesId
Badge.patch('/:filesId', ( request, response ) => {
    const fileId = request.params.filesId;
    File.updateOne(
        { _id: fileId }, 
        { $set: { ...request.body } })
    .then( result => {
        if( result.modifiedCount === 1 ){
            response.status(200).send({ status: "File has been updated" });
        }
    });
});

//TODO: DELETE files/:filesId
router.delete('/:filesId', (request,response)=>{
    Client.deleteOne({_id: request.params.filesId})
    .then(result => {
        if (result.deletedCount === 1 ){
            response.status(200).send({status:'File removed'})
    } else {
        response.status(404).send({status:'This File is already deleted'})
        return 
        }
    })
});

module.exports = router;