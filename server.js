import express from "express";
import dotenv from "dotenv";
import LoginRoute from "./routes/LoginRoute.js";
import ProjectRoute from "./routes/ProjectRoute.js";
import userDetails from './routes/userDetails.js';
import Experience from './routes/ExperienceRoute.js';
import cors from "cors";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import connectDB from "./config/db.js";
import bodyParser from 'body-parser';


dotenv.config();

connectDB();

const app = express();

app.use(cors());
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.use(express.json());
app.use(express.urlencoded({ extended
  : true }));

  

app.use("/api/user", LoginRoute);
app.use("/api/project", ProjectRoute);
app.use("/api/experience", Experience);
app.use("/api/createDetail", userDetails);

const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
