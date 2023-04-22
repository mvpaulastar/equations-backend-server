const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const problemSchema = new Schema({
    left: {
        type: Number,
        required: true
    },
    right: {
        type: Number,
        required: true
    },
    goal: {
        type: Number,
        required: true
    },
    tiles: {
        type: Array,
        required: true
    }
}, {timestamps: true});

module.exports = mongoose.model('Problem', problemSchema);