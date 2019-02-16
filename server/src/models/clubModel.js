import mongoose from "mongoose";

const Schema = mongoose.Schema;

export const ClubSchema = new Schema({
  clubId: {
    type: Number,
    required: "Enter a club Id"
  },
  clubName: {
    type: String,
    required: "Enter a club name"
  },
  description: {
    type: String
  },
  events: {
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
