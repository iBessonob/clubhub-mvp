import mongoose from "mongoose";
import { ClubSchema, EventSchema, UserSchema } from "../models/clubModel";

const Club = mongoose.model("Club", ClubSchema);
const Event = mongoose.model("Event", EventSchema);
const User = mongoose.model("User", UserSchema);

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
  Club.findOne({ _id: req.params.clubid })
    .then(club => {
      res.send(club);
    })
    .catch(err => {
      res.send({ club: "Cannot find the club" });
    });
};

export const deleteClubById = (req, res) => {
  Club.findOneAndRemove({ _id: req.params.clubid }).then(() => {
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
export const getAllUsers = (req, res) => {
  User.find((err, users) => {
    if (err) {
      res.status(404).send(err);
    }
    if (users) {
      res.status(200).send(users);
    }
  });
};
export const signUp = (req, res) => {
  const newUser = new User(req.body);
  newUser.save().then(user => {
    res.status(200).send(user);
  });
};

export const unregisterEventByUserId = (req, res) => {
  Event.findOne({ club: req.params.clubid, _id: req.params.eventid })
    .populate("club", ["clubName", "description"])
    .then(event => {
      if (event) {
        User.findOne({ _id: req.body.userId }).then(user => {
          const removeEvent = user.events
            .map(event => event.eventId)
            .indexOf(req.params.eventid);

          if (removeEvent >= 0) {
            user.events.splice(removeEvent, 1);
            user.save().then(user => {
              const removeUser = event.users
                .map(user => user.userId)
                .indexOf(req.body.userId);

              if (removeUser >= 0) {
                event.users.splice(removeUser, 1);
                event.save().then(event => {
                  res.status(200).send(user);
                });
              } else {
                res
                  .status(200)
                  .send({ user: "This event does not contain the user" });
              }
            });
          } else {
            res
              .status(404)
              .send({ event: "The user does not register this event" });
          }
        });
      } else {
        res.status(200).send({ event: "Cannot find the event from this club" });
      }
    })
    .catch(err => res.status(404).send(err));
};

export const registerEventByUserId = (req, res) => {
  Event.findOne({ club: req.params.clubid, _id: req.params.eventid })
    .populate("club", ["clubName", "description"])
    .then(event => {
      if (event) {
        User.findOne({ _id: req.body.userId }).then(user => {
          user.events.push({
            eventId: event._id,
            eventName: event.eventName,
            clubId: event.club._id,
            clubName: event.club.clubName
          });

          user.save().then(user => {
            event.users.push({
              userId: req.body.userId,
              userName: user.userName
            });
            event.save().then(event => {
              res.status(200).send(user);
            });
          });
        });
      } else {
        res.status(200).send({ event: "Cannot find the event from this club" });
      }
    })
    .catch(err => res.status(404).send(err));
};
