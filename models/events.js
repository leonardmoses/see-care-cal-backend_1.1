// =======================================
//        SCHEMA MODEL DEPENDENCIES
// =======================================
const mongoose = require('mongoose')

// =======================================
//               SCHEMA  
// =======================================
const EventSchema = new mongoose.Schema({
    eventName: {
        type: String,
        required: true,
    },
    startTime: {
        type: String,
        required: true,
    },
    endTime: {
        type: String,
        required: true,
    },
    participants: {
        type: Array,
        required: true,
    },
    description: {
        type: String,
        required: false,
    },
});

// =======================================
//                 MODEL 
// =======================================


// =======================================
//             EXPORT MODEL
// =======================================
// Export model to controller
const EventModel = mongoose.model("events", EventSchema)
module.exports = EventModel