const express = require('express');
const router = express.Router();
const User = require('../models/User');
const Group = require('../models/Group');

router.post('/content', function(req,res){
    Promise.all([
        User.count(),
        Group.count()
    ]).then(results=>{
        const [users, groups] = results;
        return res.status(200).json({
            code: 200,
            users,
            groups: groups
        })
    }).catch(err=>{
        return res.status(500).json({
            code: 500,
            error: err
        })
    })
});

module.exports = router;