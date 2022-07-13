const express = require('express');

const router = express.Router();
const Alumni = require('../models/Alumni');

router.get('/alumni/register', (req,res)=>{
    res.send('Alumni registration form');
})

module.exports = router