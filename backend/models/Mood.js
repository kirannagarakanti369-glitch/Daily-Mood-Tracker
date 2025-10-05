const mongoose = require('mongoose');
const moodSchema = new mongoose.Schema({
    mood :{
        type:String,
        required: true,
     enum: ['happy', 'sad', 'tired', 'angry', 'excited','calm','confused'],
    },
    note:{
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports=mongoose.model('Mood',moodSchema);