const { Schema, model } = require('mongoose');

const taskSchema = new Schema({
    title: {
        type: String,
        max: 50,
        required: true
    },
    description: {
        type: String,
        max: 100
    },
    state: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
},{
    versionKey: false,
    timestamps: true
})

module.exports = model('Task', taskSchema)