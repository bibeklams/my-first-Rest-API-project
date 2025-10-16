# Movie API

This is my **first REST API project** built using **Node.js, Express, and MongoDB**.  
It allows you to **perform CRUD operations on movies** (Create, Read, Update, Delete) through a RESTful API.  

---

## 🚀 Features

- Add a new movie  
- Get all movies  
- Get a movie by ID  
- Update a movie by ID  
- Delete a movie by ID  
- Insert multiple movies at once  
- Validation for required fields (`title`, `price`)  

---

## 🛠 Tech Stack

- **Backend:** Node.js, Express.js  
- **Database:** MongoDB (Mongoose ORM)  
- **Environment Variables:** `.env` file for `MONGO_URL` and `PORT`  
- **Testing:** Postman  

---

## 📂 Project Structure

Movie-API/
│
├─ models/
│ └─ movie.js # Mongoose schema for Movie
│
├─ router/
│ └─ movieRouter.js # Routes for movie API
│
├─ server.js # Entry point of the server
├─ .env # Environment variables (not in Git)
├─ .gitignore
└─ package.json
