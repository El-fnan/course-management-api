# 📘 Course Management API

A RESTful API built with **Node.js**, **Express.js**, and **MongoDB (Mongoose)** to manage online courses — including create, read, update, and delete (CRUD) operations.

---

## Features

* Create a new course
* Get all courses
* Get a single course by ID
* Update course details
* Delete a course
* Input validation
* Timestamps support

---

## Tech Stack

* Node.js
* Express.js
* MongoDB & Mongoose
* Postman (for testing)

---

## Project Structure

```
project-root/
├── database/
│   └── dbconnection.js
│   └── models/
│       └── course.model.js
├── src/
│   └── modules/
│       └── course/
│           ├── course.controller.js
│           └── course.routes.js
├── index.js
```

---

## API Endpoints

| Method | Endpoint          | Description        |
| ------ | ----------------- | ------------------ |
| GET    | `/api/courses`     | Get all courses    |
| GET    | `/api/courses/:id` | Get a course by ID |
| POST   | `/api/courses`     | Add a new course   |
| PUT    | `/api/courses/:id` | Update a course    |
| DELETE | `/api/courses/:id` | Delete a course    |

---

## Testing with Postman

### Example Request (POST `/api/courses`)

```
POST http://localhost:5000/api/courses
```

```json
{
  "title": "Node.js",
  "description": "Backend Course using Express.js",
  "price": 250,
  "image": "https://example.com/image.png",
  "startDate": "2025-06-01",
  "endDate": "2025-07-01"
}
```

---
## Author

* **Amr Mohammed**
* GitHub: [@El-fnan](https://github.com/El-fnan)

---

## 📄 License

MIT
