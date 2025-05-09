import { courseModel } from "../../../database/models/course.mode.js";

const addCourse = async (req, res) => {
    try {
        const { title, description, image, startDate, endDate, price } = req.body;

        if (!title || !description || !price)
            return res.status(400).json({ message: "title, description, price are required" });

        const course = await courseModel.insertOne({
            title,
            description,
            image,
            startDate,
            endDate,
            price
        });

        return res.status(201).json({ message: "Course added successfully", course })
    } catch (err) {
        return res.status(500).json({ message: "Something went wrong", error: err.message });
    }
};

const getCourse = async (req, res) => {
    try {
        const { id } = req.params;
        const course = await courseModel.findById(id);

        if (course)
            return res.status(200).json({ message: "Success", course });

        res.status(404).json({ message: "Course not found" });
    } catch (err) {
        return res.status(500).json({ message: "Something went wrong", error: err.message });
    }
};

const getCourses = async (req, res) => {
    try {
        const courses = await courseModel.find();

        return res.json({ message: "Success", courses });

    } catch (err) {
        return res.status(500).json({ message: "Something went wrong", error: err.message });
    }
};


const updateCourse = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, description, image, startDate, endDate, price } = req.body;

        if (!title || !description || !price)
            return res.status(400).json({ message: "title, description, price are required" });

        const check = await courseModel.findByIdAndUpdate(
            id,
            {
                title,
                description,
                image,
                startDate,
                endDate,
                price
            });

        if (check)
            return res.json({ message: "Course updated successfully" });

        res.json({ message: "Course not found" });
    } catch (err) {
        return res.status(500).json({ message: "Something went wrong", error: err.message });
    }
};

const deleteCourse = async (req, res) => {
    try {
        const { id } = req.params;
        const check = await courseModel.findByIdAndDelete(id);

        if (check)
            return res.status(200).json({ message: "Course deleted successfully" });

        res.status(404).json({ message: "Course not found" });
    } catch (err) {
        return res.status(500).json({ message: "Something went wrong", error: err.message });
    }
};

export { addCourse, getCourse, getCourses, updateCourse, deleteCourse };