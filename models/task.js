const mongoose = require('mongoose') ;
const Schema = mongoose.Schema ;

//ODM
const taskSehema = new Schema({
    title:{
        type: String,
        require:true,
    },
    description:{
        type: String,
    },
    status:{
        type: String,
        enum: ["active", "inactive"],
    },
    date:{
        type: Date,
        default: Date.now ,
    },

});

const Task = mongoose.model('Task', taskSehema);

module.exports = Task ;