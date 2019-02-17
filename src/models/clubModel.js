import mongoose from "mongoose";

const Schema = mongoose.Schema;

export const EventSchema = new Schema({
  club: {
    type: Schema.Types.ObjectId,
    ref: "Club"
  },
  freeFood: { type: Boolean },
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
  },
  location: { type: String },
  date: { type: String },
  time: { type: String },
  users: [
    {
      userId: { type: String },
      userName: { type: String }
    }
  ]
});

export const ClubSchema = new Schema({
  clubName: {
    type: String,
    required: "Enter a club name"
  },
  category: {
    type: String
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
  },
  contacts: [
    {
      name: { type: String },
      email: { type: String }
    }
  ]
});

export const UserSchema = new Schema({
  userName: {
    type: String,
    required: "Enter a user name"
  },
  password: {
    type: String,
    required: "Enter the password"
  },
  email: {
    type: String
  },
  phone: {
    type: Number
  },
  created_date: {
    type: Date,
    default: Date.now
  },
  events: [
    {
      eventId: { type: String },
      eventName: { type: String },
      clubId: { type: String },
      clubName: { type: String }
    }
  ]
});