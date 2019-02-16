import mongoose from 'mongoose';
import { ClubSchema } from '../models/clubModel';

const Club = mongoose.model('Club', ClubSchema);

export const addNewClub = (req, res) => {
    let newClub = new Club(req.body);

    newClub.save((err, club) => {
        if (err) {
            res.send(err);
        }
        res.json(club);
    });
};

export const getClubs = (req, res) => {
    Club.find({}, (err, clubs) => {
        if (err) {
            res.send(err);
        }
        res.json(clubs);
    });
};