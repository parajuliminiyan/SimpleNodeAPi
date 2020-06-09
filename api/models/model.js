const mangoose = require('mongoose');
var Schema = mangoose.Schema;

var AppSchema = new Schema({
    
    name:{
        type: String,
        required: 'Name of the work'
    },
    Created_date:{
        type: Date,
        default: Date.now()
    },
    status:{
        type: [{
        enum: ['pending', 'ongoing', 'completed']
    }],
    default: ['pending']
    }
});

module.exports = mangoose.model('Tasks', AppSchema);