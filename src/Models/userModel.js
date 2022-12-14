const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const userSchema = new mongoose.Schema({
    
    uid:{type:String, required: true, unique: true},

    first_Name:{ type:String, required: true},

    last_Name:{ type:String, required: true},

    mobile_Number:{ type:String, required: true},

    email_id:{ type:String, required: true, unique: true},

    linkedIN_url:{ type:String, required: true},

    image:{type: String},
    
    isDisabled:{type:Boolean, default: false },

    isDisabledAt:{type: Date, default: null}

},{timestamps: true});

module.exports = mongoose.model('users', userSchema);