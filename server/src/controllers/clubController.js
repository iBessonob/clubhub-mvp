import mongoose from "mongoose";
import { ClubSchema, EventSchema } from "../models/clubModel";

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
  //Including club_ID
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
  Club.findOne({ _id: req.params.clubid })
    .then(club => {
      if (club) {
        res.send(club);
      } else {
        res.send({ club: "Cannot find the club" });
      }
    })
    .catch(err => {
      res.status(404).send(err);
    });
};

export const deleteClubById = (req, res) => {
  Club.find({ _id: req.params.clubid }).remove(() => {
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
