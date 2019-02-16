import { getAllUsers, signUp } from "../controllers/clubController";
const userRoutes = app => {
  app
    .route("/users")
    .get(getAllUsers)
    .post(signUp);
};
export default userRoutes;