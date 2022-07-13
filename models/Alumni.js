const mongoose = require('mongoose');

const alumniSchema = new mongoose.Schema({
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
    cohort : {
        type : String
    },
    age : {
        type : String
    }
})

module.exports = mongoose.model('Alumni', alumniSchema);
