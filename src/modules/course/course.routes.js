import express from "express";
import * as CTRL from "./course.controller.js";

const courseRouter = express.Router();

courseRouter.get("/", CTRL.getCourses);
courseRouter.get("/:id", CTRL.getCourse);
courseRouter.post("/", CTRL.addCourse);
courseRouter.put("/:id", CTRL.updateCourse);
courseRouter.delete("/:id", CTRL.deleteCourse);

export default courseRouter;