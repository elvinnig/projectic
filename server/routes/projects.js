const express = require('express');
const router = express.Router();

//*Models
const Project = require('../models/Project');

// RETURN ALL CONTENTS ON A CERTAIN PROJECT
//TODO: GET projects/:id
router.get('/:projectID', (request, response) => {
    Project
    .find(
        { _id: request.params.badgeID },
        { 
            posts: 1
        })
    .populate('badgeID', 'name')
    .exec( (error, result) => {
        console.log( result );
        if( typeof result === 'object' ){
            response.send( result );
        }
    });
})

// CREATE A NEW PROJECT
// Parameter ID is the author of the project
//TODO: GET projects/:id
router.project('/:projectID', ( request, response ) => {
    let newProject = new Project({
        ...request.body,
        authorID: request.params.id
    });
    newProject.save().then( result => {
        response.send({ status: "New project has been created" });
    });
});



//UPDATE A PROJECT
//TODOl: PATCH projects/:id
router.put('/:projectID', ( request, response ) => {
    const projectId = request.params.id;
    Project.updateOne(
        { _id: projectID }, 
        { $set: { ...request.body } })
    .then( result => {
        if( result.modifiedCount === 1 ){
            response.send({ status: "Project has been updated" });
        }
    });
});


// DELETE A PROJECT
//TODO: GET projects/:id
router.delete('/:projectID', ( request, response ) => {
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
