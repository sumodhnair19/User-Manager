const express = require('express');
const router = express.Router();
const Group = require('../models/Group');
const User = require('../models/User');

// Get all groups list endpoint
router.post('/all', function (req, res, next) {
    Group.find().sort({title: 1})
    .exec(function (err, groups) {
        if(err){
            return res.status(500).json({
                code: 500,
                error: err
            })
        }else{
            res.status(200).json({
                code: 200,
                message: "success",
                data: groups
            })
        }
    });
});

// Get group by id endpoint
router.post('/byid/:id', function(req, res, next){
    Group.findById(req.params.id)
    .exec(function(err, group) {
        if(err){
            return res.status(500).json({
                code: 500,
                error: err
            })
        }else if (!group) {
            return res.status(404).json({
                code: 404,
                error: 'Group not found'
            });
        }else{
            res.status(200).json({
                code: 200,
                data: group
            })
        }
    });
});

//search group endpoint
router.post('/search/:term', function (req, res, next) {
    Group.find({$or: [{title: { "$regex": req.params.term.trim(), "$options": "i" }}]}).limit(10)
    .exec(function(err, groups) {
        if(err){
            return res.status(500).json({
                code: 500,
                error: err
            })
        }else{
            res.status(200).json({
                code: 200,
                data: groups
            })
        }
    });
});

//Add group endpoint
router.post('/add', function (req, res, next) {
    if(!req.body.title){
        return res.status(400).json({
            code: 400,
            error: "Please provide group title"
        });
    }else{
        const group = new Group({
            title: req.body.title
        });

        group.save(function (err, result) {
            if (err) {
                return res.status(500).json({
                    code: 500,
                    title: 'An error occurred',
                    error: err
                });
            }else{
                res.status(200).json({
                    code:200,
                    message: 'New Group Successfully Added',
                    type: 'created',
                    data: result
                });
            }
        });
    }
});

// Update Group endpoint
router.put('/:id', function (req, res, next) {
    Group.findById(req.params.id, function (err, group) {
        if (err) {
            return res.status(500).json({
                code: 500,
                error: err
            });
        }else if (!group) {
            return res.status(404).json({
                code: 404,
                error: 'Group not found'
            });
        }else{
            group.title = req.body.title;
            group.save(function (err, result) {
                if (err) {
                    return res.status(500).json({
                        code: 500,
                        error: err
                    });
                }else{
                    res.status(200).json({
                        code:200,
                        message: 'Group Updated'
                    });
                }
            });
        }
    });
});

// Delete group endpoint
router.delete('/:id', function(req, res, next) {
    Group.findById(req.params.id, function (err, group) {
        if (err) {
            return res.status(500).json({
                code: 500,
                error: err
            });
        }else if (!group) {
            return res.status(404).json({
                code: 404,
                error: 'Group not found'
            });
        }else{
            // Check if group has user assigned before delete
            User.findOne({group: group._id}, function(err, user) {
                if (err) {
                    return res.status(500).json({
                        code: 500,
                        error: err
                    });
                }else if (user) {
                    return res.status(400).json({
                        code: 400,
                        error: "This group has user assigned. Please change user's group then try again"
                    });
                }else{
                    group.remove(function (err, result) {
                        if (err) {
                            return res.status(500).json({
                                code: 500,
                                error: err
                            });
                        }else{
                            res.status(200).json({
                                code: 200,
                                type: 'deleted',
                                message: 'Group deleted'
                            });
                        }
                    });
                }
            });
        }
    });
});

module.exports = router;
