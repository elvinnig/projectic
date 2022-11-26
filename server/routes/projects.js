const express = require('express');
const router = express.Router();

//*Models
const Project = require('../models/Project');

// RETURN ALL CONTENTS ON A CERTAIN PROJECT
//TODO: POST projects
router.post('/', ( request, response ) => {
    let newProject = new Project({
        ...request.body
    });
    newProject.save().then( result => {
        response.send({ status: "New project has been created" });
    });
});

//TODO: GET projects/:projectID
//*this populate the badge 
router.get('/:projectID', (request, response) => {
    Project
    .findOne(
        { _id: request.params.projectID },
        { badgeID: 1}
        )
    .populate('badgeID', 'name')
    .exec( (error, result) => {
        console.log( result );
        if( typeof result === 'object' ){
            response.send( result );
        }
    });
})
//TODO: PUT the badgeID into the the array
//* this put the badge into the project
router.put('/:projectID/badges/:badgeID', ( request, response ) => {
    Client.updateOne(
        { _id: request.params.projectID }, 
        { $push: { badgeID: request.params.badgeID }}
    ).then( result => {
        if( result.modifiedCount === 1 ){
            response.status(202).send({ status: "Badge has been added to Project" });
        }
    });
});

//TODO: PATCH projects/:id
router.patch('/:projectID', ( request, response ) => {
    const addProjectId = request.params.projectID;
    Project.updateOne(
        { _id: addProjectId }, 
        { $set: { ...request.body } })
    .then( result => {
        if( result.modifiedCount === 1 ){
            response.status(200).send({ status: "Project has been updated" });
        }
    });
});


// DELETE A PROJECT
//TODO: GET projects/:id
router.delete('/:projectID', (request,response)=>{
    Project.deleteOne({_id: request.params.projectID})
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
