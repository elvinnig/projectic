const express = require('express');
const router = express.Router();

//*Models
const Project = require('../models/Project');

// RETURN ALL CONTENTS ON A CERTAIN PROJECT
//TODO: GET projects/:id
router.get('/:projectsId', (request, response) => {
    Project.findOne(
        { _id: request.params.projectsId },
        )
    .then( (result) => {
        console.log( result );
        if( typeof result === 'object' ){
            response.status(202).send( result );
        }
    });
});

// CREATE A NEW PROJECT
// Parameter ID is the author of the project
//TODO: GET projects/:id
router.project('/:id', ( request, response ) => {
    let newProject = new Project({
        ...request.body,
        author: request.params.id
    });
    newProject.save().then( result => {
        response.send({ status: "New project has been created" });
    });
});



//UPDATE A PROJECT
//TODOl: PATCH projects/:id
router.put('/:id', ( request, response ) => {
    const projectId = request.params.id;
    Project.updateOne(
        { _id: projectId }, 
        { $set: { ...request.body } })
    .then( result => {
        if( result.modifiedCount === 1 ){
            response.send({ status: "Project has been updated" });
        }
    });
});


// DELETE A PROJECT
//TODO: GET projects/:id
router.delete('/:id', ( request, response ) => {
    Project.deleteOne({ _id: request.params.id })
    .then( result => {
        if( result.deletedCount === 1 ){
            response.send({
                status: "Project has been deleted"
            });
        }
    });
});


module.exports = router;
