import mongoose from "mongoose";

const Schema = mongoose.Schema;

export const EventSchema = new Schema({
  club: {
    type: Schema.Types.ObjectId,
    ref: "Club"
  },
  eventName: {
    type: String,
    required: "Enter a Event name"
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
  clubName: {
    type: String,
    required: "Enter a club name"
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
