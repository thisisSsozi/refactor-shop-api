const express = require('express');

const router = express.Router();
const Program = require('../models/Program');

router.get('/program/register', (req,res)=>{
    res.send('Course registration form');
})

module.exports = router