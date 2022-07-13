const express = require('express');

const router = express.Router();
const Course = require('../models/Program');

router.get('/course/register', (req,res)=>{
    res.send('Course registration form');
})
router.post('/course/register', async(req,res)=>{
    try {
        const newCourse = new Course(req.body);
        await newCourse.save();
        res.json({message:'Course registered', newCourse})
        console.log(newCourse)
    } catch (error) {
        res.status(400).send('Unsuccessful registration')
        console.log(error)
    }
})

module.exports = router