import {
  addNewClub,
  getClubs,
  getClubById,
  deleteClubById,
  getEventById,
  getEventsById,
  addNewEvent,
  deleteEventById
} from "../controllers/clubController";

const routes = app => {
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
  //.post(registerEventByUserId);
};

export default routes;
