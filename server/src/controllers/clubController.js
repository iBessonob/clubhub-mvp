import mongoose from "mongoose";
import { ClubSchema, EventSchema, UserSchema } from "../models/clubModel";

const Club = mongoose.model("Club", ClubSchema);
const Event = mongoose.model("Event", EventSchema);

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

export const getEventById = (req, res) => {
  Event.findOne({ club: req.params.clubid, _id: req.params.eventid })
    .populate("club", ["clubName", "description"])
    .then(event => {
      if (event) {
        res.status(200).send(event);
      } else {
        res.status(200).send({ event: "Cannot find the event from this club" });
      }
    })
    .catch(err => res.status(404).send(err));
};

export const getEventsById = (req, res) => {
  Event.find({ club: req.params.clubid })
    .populate("club", ["clubName", "description"])
    .then(events => {
      res.status(200).send(events);
    });
};

export const deleteEventById = (req, res) => {
  Event.find({ club: req.params.clubid, _id: req.params.eventid }).remove(
    () => {
      res.status(200).send({ success: true });
    }
  );
};
