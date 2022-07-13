const express = require('express');
const mongoose = require('mongoose');

const config = require("./config/db");

const staffRoutes = require('./routes/staffroutes');
const courseRoutes = require('./routes/courseroutes');
const programRoutes = require('./routes/programroutes');
const alumniRoutes = require('./routes/alumniroutes')

const app = express();


mongoose.connect(config.database,{ useNewUrlParser: true });
const db = mongoose.connection;

db.once('open', function(){
    console.log('Connected to Mongodb');
});

db.on('error', function(err){
    console.error(err);
}); 

app.use(express.urlencoded({extended: true}));
app.use(express.json())

// app.use('/api', serviceRoutes);
app.use('/api', staffRoutes);
app.use('/api', courseRoutes);
app.use('/api', programRoutes);
app.use('/api', alumniRoutes);




app.listen(3099, () => console.log("Listening on Port 3099"));