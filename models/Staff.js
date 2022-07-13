const mongoose = require('mongoose');

const staffSchema = new mongoose.Schema({
    firstname : {
        type : String,
        trim : true
    }, 
    lastname : {
        type : String,
        trim : true
    },
    email : {
        type : String,
        unique : true,
        trim : true
    },
    phone : {
        type : Number,
        unique : true
    },
    role : {
        type : String
    },
    department : {
        type : String
    }
})

module.exports = mongoose.model('Staff', staffSchema);
