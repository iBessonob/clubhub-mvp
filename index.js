import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import clubRoutes from "./src/routes/clubRoutes";
import userRoutes from "./src/routes/userRoutes";
import morgan from "morgan";

const app = express();
const PORT = 3001;

// mongoose connection
mongoose.Promise = global.Promise;
mongoose.connect(
  "mongodb+srv://clubhubhackuci:umE6VPOTuXfYqC1i@cluster0-aahor.mongodb.net/ClubHub?retryWrites=true"
);

// bodyparser setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan("dev"));

clubRoutes(app);
userRoutes(app);
<<<<<<< HEAD:server/index.js

=======
>>>>>>> 66e88900ca09f1491c3374dc5040ec7782e82c4b:index.js
// serving static files
app.use(express.static("public"));

app.get("/", (req, res) =>
  res.send(
    `Node and express server is running on port ${process.env.PORT || PORT}`
  )
);

app.listen(process.env.PORT || PORT, () =>
  console.log(`Server running on port ${process.env.PORT || PORT}`)
);
