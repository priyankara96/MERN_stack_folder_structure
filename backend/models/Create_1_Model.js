const mongoose = require('mongoose');
const Create_Schema = new mongoose.Schema({

    Attribute1:{
        type:String,
        required:true
    },

    Attribute2:{
        type:String,
        required:true
    },

    Attribute3:{
        type:String,
        required:true
    }
    
});

module.exports = mongoose.model('DB_Name',Create_Schema);

