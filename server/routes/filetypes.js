const { request } = require('express');
const express = require('express');
const router = express.Router();

//*Models
const FileType = require('../models/FileType');

//TODO: POST
router.post('/', ( request, response ) => {
    let addFileType = new FileType( request.body );
    addFileType.save().then( result => {
        response.status(200).send({ status: 'You added new FileType' });
    });
});

//TODO: GET filetypes/:filetypeId
router.get('/:filetypesId', (request, response) => {
    FileType.findOne(
        { _id: request.params.filetypesId }
        )
    .then( (result) => {
        console.log( result );
        if( typeof result === 'object' ){
            response.status(202).send( result );
        }
    });
});

//TODO: PATCH filetypes/:filetypeId
Badge.patch('/:filetypesId', ( request, response ) => {
    const filetypeId = request.params.filetypesId;
    FileType.updateOne(
        { _id: filetypeId }, 
        { $set: { ...request.body } })
    .then( result => {
        if( result.modifiedCount === 1 ){
            response.status(200).send({ status: "File has been updated" });
        }
    });
});

//TODO: DELETE filetypes/:filetypeId
router.delete('/:filetypesId', (request,response)=>{
    FileType.deleteOne({_id: request.params.filetypesId})
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