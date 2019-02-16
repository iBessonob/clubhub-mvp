import {
  addNewClub,
  getClubs,
  getClubById,
  deleteClubById
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

  app.route("/clubs/:clubid").get(getClubById);
  app.route("/club/:clubid").delete(deleteClubById);
};

export default routes;
