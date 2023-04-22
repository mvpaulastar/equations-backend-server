const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const userSchema = new Schema({
    firstName : {
        type: String,
        required: true
    },
    lastName : {
        type: String,
        required: true,
    },
    email : {
        type: String,
        required: true,
    },
    streak: {
        type: Number,
        default: 0
    },
    times: {
        type: Array,
        default: []
    }
},{timestamps: true});

module.exports = mongoose.model('User', userSchema );