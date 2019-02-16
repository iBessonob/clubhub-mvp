import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const EventSchema = new Schema({
    eventId: {
        type: Number,
        required: 'Enter a Event Id'
    },
    eventName: {
        type: String,
        required: 'Enter a Event name'
    },
    description: {
        type: String
    },
    phone: {
        type: Number
    },
    created_date: {
       type: Date,
       default: Date.now 
    }
});

export const ClubSchema = new Schema({
    clubId: {
        type: Number,
        required: 'Enter a club Id'
    },
    clubName: {
        type: String,
        required: 'Enter a club name'
    },
    description: {
        type: String
    },
    events: [
        EventSchema
    ],
    phone: {
        type: Number
    },
    created_date: {
       type: Date,
       default: Date.now 
    }
});
