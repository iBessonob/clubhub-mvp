import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import clubRoutes from "./src/routes/clubRoutes";
import userRoutes from "./src/routes/userRoutes";
import morgan from "morgan";

const app = express();
const PORT = 3000;

// mongoose connection
mongoose.Promise = global.Promise;
// mongoose.connect('mongodb+srv://ishankkm:lhdzDN29cojaXwkz@ishankmdb1-yi3zu.mongodb.net/ClubHub');
mongoose.connect(
  "mongodb+srv://clubhubhackuci:umE6VPOTuXfYqC1i@cluster0-aahor.mongodb.net/ClubHub?retryWrites=true"
);

// bodyparser setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan("dev"));

clubRoutes(app);
userRoutes(app);
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
