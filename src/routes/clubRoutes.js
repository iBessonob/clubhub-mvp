import {
  addNewClub,
  getClubs,
  getClubById,
  deleteClubById,
  getEventById,
  getEventsById,
  addNewEvent,
  deleteEventById,
  getAllUsers,
  signUp,
  registerEventByUserId,
  unregisterEventByUserId
} from "../controllers/clubController";

<<<<<<< HEAD:server/src/routes/clubRoutes.js
const routes = app => {
 
=======
const clubRoutes = app => {
>>>>>>> 66e88900ca09f1491c3374dc5040ec7782e82c4b:src/routes/clubRoutes.js
  app
    .route("/clubs")
    .get((req, res, next) => {
      // middleware
      console.log(`Request from: ${req.originalUrl}`);
      console.log(`Request type: ${req.method}`);
      next();
    }, getClubs)

    // POST endpoint
    .post(addNewClub);

  app
    .route("/clubs/:clubid")
    .get(getClubById)
    .delete(deleteClubById);

  app
    .route("/clubs/:clubid/events")
    .post(addNewEvent)
    .get(getEventsById);

  app
    .route("/clubs/:clubid/events/:eventid")
    .get(getEventById)
    .delete(deleteEventById);
  app
    .route("/clubs/:clubid/events/:eventid/register")
    .post(registerEventByUserId);
  app
    .route("/clubs/:clubid/events/:eventid/unregister")
    .post(unregisterEventByUserId);
};

export default clubRoutes;
