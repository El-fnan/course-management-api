import express from "express";
import { conn } from "./database/dbconnection.js";
import courseRouter from "./src/modules/course/course.routes.js";

const App = express();
const Port = 5000;

App.use(express.json());
App.use("/api/courses", courseRouter);

conn();
App.listen(Port, () => console.log(`Server is Running At Port => ${Port}`));