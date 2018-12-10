const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Get all users list endpoint
router.post('/all', function (req, res, next) {
    User.find().sort({fullname: 1})
    .skip(parseInt(req.body.skip))
    .limit(parseInt(req.body.limit))
    .populate('group')
    .exec(function (err, users) {
        if(err){
            return res.status(500).json({
                code: 500,
                error: err
            })
        }else{
            res.status(200).json({
                code: 200,
                message: "success",
                data: users
            })
        }
    });
});

// Get user by id endpoint
router.post('/byid/:id', function(req, res, next){
    User.findById(req.params.id)
    .exec(function(err, user) {
        if(err){
            return res.status(500).json({
                code: 500,
                error: err
            })
        }else if (!user) {
            return res.status(404).json({
                code: 404,
                error: 'User not found'
            });
        }else{
            res.status(200).json({
                code: 200,
                data: user
            })
        }
    });
});

// Get users by group id endpoint
router.post('/bygroup/:groupid', function(req, res, next){
    User.find({group: req.params.groupid})
    .populate('group')
    .exec(function(err, users) {
        if(err){
            return res.status(500).json({
                code: 500,
                error: err
            })
        }else{
            res.status(200).json({
                code: 200,
                data: users
            })
        }
    });
});

//search user endpoint
router.post('/search/:term', function (req, res, next) {
    let query;
    if(req.body.groupid){
        query = {$or: [{fullname : { "$regex": req.params.term.trim(), "$options": "i" }}], group: req.body.groupid};
    }else{
        query = {$or: [{fullname : { "$regex": req.params.term.trim(), "$options": "i" }}]}
    }
    User.find(query).limit(10)
    .populate('group')
    .exec(function(err, users) {
        if(err){
            return res.status(500).json({
                code: 500,
                error: err
            })
        }else{
            res.status(200).json({
                code: 200,
                data: users
            })
        }
    });
});

//Add user endpoint
router.post('/add', function (req, res, next) {
    if(!req.body.group){
        return res.status(400).json({
            code: 400,
            error: "Please select at least one group to add user"
        });
    }else if(!req.body.email){
        return res.status(400).json({
            code: 400,
            error: "Please provide email"
        });
    }else if(!req.body.fullname){
        return res.status(400).json({
            code: 400,
            error: "Please enter Full Name"
        });
    }else{
        const user = new User({
            fullname: req.body.fullname,
            email: req.body.email,
            group: req.body.group
        });

        user.save(function (err, result) {
            if (err) {
                return res.status(500).json({
                    code: 500,
                    title: 'An error occurred',
                    error: err
                });
            }else{
                res.status(200).json({
                    code:200,
                    message: 'New User Successfully Added',
                    type: 'created',
                    data: result
                });
            }
        });
    }

});

//Update user endpoint
router.put('/:id', function (req, res, next) {
    User.findById(req.params.id, function (err, user) {
        if (err) {
            return res.status(500).json({
                code: 500,
                error: err
            });
        }else if (!user) {
            return res.status(404).json({
                code: 404,
                error: 'User not found'
            });
        }else{
            user.fullname = req.body.fullname;
            user.email = req.body.email;
            user.group = req.body.group;
            user.save(function (err, result) {
                if (err) {
                    return res.status(500).json({
                        code: 500,
                        error: err
                    });
                }else{
                    res.status(200).json({
                        code:200,
                        message: 'User Updated'
                    });
                }
            });
        }
    });
});

//Delete user endpoint
router.delete('/:id', function(req, res, next) {
    User.findById(req.params.id, function (err, user) {
        if (err) {
            return res.status(500).json({
                code: 500,
                error: err
            });
        }else if (!user) {
            return res.status(404).json({
                code: 404,
                error: 'User not found'
            });
        }else{
            user.remove(function (err, result) {
                if (err) {
                    return res.status(500).json({
                        code: 500,
                        error: err
                    });
                }else{
                    res.status(200).json({
                        code: 200,
                        message: 'User deleted',
                        type: 'deleted'
                    });
                }
            });
        }
    });
});

module.exports = router;
