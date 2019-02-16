import mongoose from "mongoose";
import { ClubSchema, EventSchema } from "../models/clubModel";

const Club = mongoose.model("Club", ClubSchema);
const Event = mongoose.model("Event", EventSchema);

export const addNewClub = (req, res) => {
  let newClub = new Club(req.body);

  newClub.save((err, club) => {
    if (err) {
      res.send(err);
    }4
    res.json(club);
  });
};

export const addNewEvent = (req, res) => {
  let newEvent = new Event(req.body);

  newClub.save((err, club) => {
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
