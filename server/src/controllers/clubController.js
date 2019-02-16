import mongoose from "mongoose";
import { ClubSchema, EventSchema, UserSchema } from "../models/clubModel";

const Club = mongoose.model("Club", ClubSchema);
const Event = mongoose.model("Event", EventSchema);
//const User = mongoose.model("User", UserSchema);

export const addNewClub = (req, res) => {
  let newClub = new Club(req.body);

  newClub.save((err, club) => {
    if (err) {
      res.send(err);
    }

    res.json(club);
  });
};

export const addNewEvent = (req, res) => {
  let newEvent = new Event(req.body);

  newEvent.save((err, club) => {
    if (err) {
      res.send(err);
    }
    res.json(club);
  });
};

export const getClubs = (req, res) => {
  Club.find((err, clubs) => {
    if (err) {
      res.send(err);
    }
    res.json(clubs);
  });
};

export const getClubById = (req, res) => {
  Club.findOne({ clubId: req.params.clubid })
    .then(club => {
      res.send(club);
    })
    .catch(err => {
      res.send({ club: "Cannot find the club" });
    });
};

export const deleteClubById = (req, res) => {
  Club.findOneAndRemove({ clubId: req.params.clubid }).then(() => {
    res.status(200).send({ success: true });
  });
};
