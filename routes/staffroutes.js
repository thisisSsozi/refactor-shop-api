const express = require('express');

const router = express.Router();
const Staff = require('../models/Staff');

router.get('/staff/register', (req,res)=>{
    res.send('Staff registration form');
})
router.post('/staff/register', async(req,res)=>{
    try {
        const newStaff = new Staff(req.body);
        await newStaff.save();
        res.json({message:'Staff registered', newStaff})
        console.log(newStaff)
    } catch (error) {
        res.status(400).send('Unsuccessful registration')
        console.log(error)
    }
})

router.get('/staff/getlist', async(req,res)=>{
    try {
        const staffList = await Staff.find({});
        res.json({message:'List of Staff', staffList})
        console.log(staffList)
    } catch (error) {
        res.status(400).send('List not found')
        console.log(error)
    }
})

router.get('/staff/:id', async(req,res)=>{
    try {
        const oneStaff = await Staff.findOne({_id:req.params.id});
        res.json({message:'Staff details', oneStaff})
        console.log(oneStaff)
    } catch (error) {
        res.status(400).send('Staff ID not found')
        console.log(error)
    }
})

router.delete('/staff/:id', async(req,res)=>{
    try {
        await Staff.findOne({_id:req.params.id});
        res.json({message:'Staff has been successfully deleted'})
    } catch (error) {
        res.status(400).send('Unable to delete Staff')
    }
})

router.patch('/staff/:id', async(req,res)=>{
    try {
        const options = {new:true};
        const updatedStaff = await Staff.findOneAndUpdate({_id:req.params.id}, {
            $set:{
                firstname: req.body.firstname,
                lastname: req.body.lastname,
                email: req.body.email,
                phone: req.body.phone,
                role: req.body.role,
                department: req.body.department
            }
        },
        options
        );
        res.json({message:'Update successful', updatedStaff})
    } catch (error) {
        res.status(400).send('Unable to update staff details')
    }
})

module.exports = router