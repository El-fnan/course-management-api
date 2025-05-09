import mongoose from "mongoose";

export const conn = () => {
    mongoose
        .connect("mongodb://127.0.0.1:27017/Courses_App")
        .then(() => console.log("Database Connected Successfully"))
        .catch(err => console.log("Database Error", err));
};