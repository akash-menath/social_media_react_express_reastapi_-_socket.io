import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors"
import AuthRoute from "./Routes/AuthRout.js";
import UserRoute from "./Routes/UserRoute.js";
import PostRoute from "./Routes/PostRout.js";
import UploadRoute from "./Routes/UploadRouts.js"

const app = express();

//to serve  image for public
app.use(express.static('public'))
app.use('/images',express.static("images"))

//middlewares
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
dotenv.config();

mongoose
  .connect(process.env.MONGO_DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(process.env.PORT, () =>
      console.log(`Listening ${process.env.PORT}`)
    )
  )
  .catch((err) => console.log(err));

//usage of routes

app.use("/auth", AuthRoute);
app.use("/user", UserRoute);
app.use("/post", PostRoute);
app.use("/upload",UploadRoute)
