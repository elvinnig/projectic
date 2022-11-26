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
router.get('/:fileId', (request, response) => {
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
router.patch('/:fileId', ( request, response ) => {
    const addFileId = request.params.fileId;
    File.updateOne(
        { _id: addFileId }, 
        { $set: { ...request.body } })
    .then( result => {
        if( result.modifiedCount === 1 ){
            response.status(200).send({ status: "File has been updated" });
        }
    });
});

//TODO: DELETE files/:filesId
router.delete('/:fileId', (request,response)=>{
    File.deleteOne({_id: request.params.fileId})
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