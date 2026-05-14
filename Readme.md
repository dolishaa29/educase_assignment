# 📚 School Management API

A professional REST API built with Node.js, Express.js, and MySQL for managing school data.

This project was developed as part of the Educase assignment.

The API allows users to:

- ➕ Add new schools
- 📍 Fetch schools sorted by nearest location using latitude and longitude
- 🗄️ Store school records in MySQL database

---

# 🚀 Features

- RESTful API architecture
- MySQL database integration
- Location-based school sorting
- Input validation
- Environment variable configuration
- Ready for deployment on Render

---

# 🛠️ Tech Stack

- Node.js
- Express.js
- MySQL
- dotenv
- nodemon

---

# 📂 Project Structure

```bash
school-management-api/
│
├── controllers/
├── routes/
├── models/
├── config/
├── .env
├── server.js
├── package.json
└── README.md
```

---

# ⚙️ Installation

## 1️⃣ Clone the Repository

```bash
git clone https://github.com/dolishaa29/educase_assignment.git
```


## 3️⃣ Install Dependencies

```bash
npm install
```

---

# 🔐 Environment Variables

Create a `.env` file in the root directory and add the following variables:

```env
PORT=5000

DB_HOST=localhost
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=school_management
```

---

# 🗄️ Database Setup

## Create Database

```sql
CREATE DATABASE defaultdb;
```

## Select Database

```sql
USE defaultdb;
```

## Create Schools Table

```sql
CREATE TABLE schools (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  address VARCHAR(255) NOT NULL,
  latitude FLOAT NOT NULL,
  longitude FLOAT NOT NULL
);
```

---

# ▶️ Run the Project

## Development Mode

```bash
npm run dev
```

## Production Mode

```bash
npm start
```

Server will run on:

```bash
http://localhost:7000
```

---

# 📌 API Endpoints

## ➕ Add School

### Endpoint

```http
POST /addSchool
```

### Request Body

```json
{
  "name": "ABC School",
  "address": "Jaipur",
  "latitude": 26.9124,
  "longitude": 75.7873
}
```

### Success Response

```json
{
  "message": "School added successfully"
}
```

---

## 📍 List Schools by Nearest Location

### Endpoint

```http
POST /listSchools?latitude=26.9124&longitude=75.7873
```

### Example Response

```json
[
  {
    "id": 1,
    "name": "ABC School",
    "address": "Jaipur",
    "latitude": 26.9124,
    "longitude": 75.7873
  }
]
```

---

# 🌍 Deployment

The project is deployed on Render.

---

# 🧪 API Testing

You can test the APIs using:

- Postman


---

# 📈 Future Improvements

- User authentication & authorization
- Pagination support
- School image upload
- Advanced search filters
- Docker support
- Unit & integration testing

---

# 👩‍💻 Author

**Dolisha**

Developed as part of the Educase Backend Assignment.