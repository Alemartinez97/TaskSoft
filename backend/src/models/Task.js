const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    taskname:{
        type: String
    },
    description:{
      type: String  
    },
    state:{
        type: String,
    },
    responsable:{
        type: String,
    },
    date:{
        type: Date,
        default:Date.now
    }
})

exports.Task = new mongoose.model('task', taskSchema);