# 📚 School Management API

A professional REST API built with Node.js, Express.js, and MySQL for managing school data.

This project was developed as part of the Educase assignment.

The API allows users to:

- ➕ Add new schools
- 📍 Fetch schools sorted by nearest location
- 🗄️ Store school records in MySQL database

---

# 🚀 Features

- RESTful API architecture
- MySQL database integration
- Location-based school sorting
- Haversine distance calculation
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
├── utils/
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
git clone https://github.com/your-username/school-management-api.git
```

## 2️⃣ Navigate to Project Directory

```bash
cd school-management-api
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
CREATE DATABASE school_management;
```

## Select Database

```sql
USE school_management;
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
http://localhost:5000
```

---

# 🌐 Live API

Base URL:

```bash
https://educase-assignment-5.onrender.com/
```

### Available Routes

#### ➕ Add School

```bash
https://educase-assignment-5.onrender.com/addSchool
```

#### 📍 List Schools

```bash
https://educase-assignment-5.onrender.com/listSchools
```

---

# 📌 API Endpoints

# ➕ Add School

### Endpoint

```http
POST /addSchool
```

### Full URL

```bash
https://educase-assignment-5.onrender.com/addSchool
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
  "success": true,
  "message": "School added successfully",
  "data": {
    "id": 1,
    "name": "ABC School",
    "address": "Jaipur",
    "latitude": 26.9124,
    "longitude": 75.7873
  }
}
```

---

# 📍 List Schools by Nearest Location

This API returns schools sorted from **nearest to farthest** based on the user's latitude and longitude.

The distance is calculated using the difference between:

- User Latitude & Longitude
- School Latitude & Longitude

The API uses the **Haversine Formula** to calculate the geographical distance between two coordinates on Earth.

---

## 📐 Haversine Formula (Used in utils)

```javascript
const R = 6371; // Radius of Earth in KM

const dLat = (schoolLat - userLat) * (Math.PI / 180);
const dLon = (schoolLon - userLon) * (Math.PI / 180);

const a =
  Math.sin(dLat / 2) * Math.sin(dLat / 2) +
  Math.cos(userLat * (Math.PI / 180)) *
    Math.cos(schoolLat * (Math.PI / 180)) *
    Math.sin(dLon / 2) *
    Math.sin(dLon / 2);

const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

const distance = R * c;
```

> This utility function is implemented inside the `utils` folder for accurate distance calculation.

---

## Endpoint

```http
GET /listSchools?latitude=26.9124&longitude=75.7873
```

### Full URL

```bash
https://educase-assignment-5.onrender.com/listSchools?latitude=26.9124&longitude=75.7873
```

---

## Query Parameters

| Parameter | Type   | Description              |
| ---------- | ------ | ------------------------ |
| latitude   | Number | User's current latitude  |
| longitude  | Number | User's current longitude |

---

## Example Response

```json
{
  "success": true,
  "count": 3,
  "data": [
    {
      "id": 1,
      "name": "ABC School",
      "address": "Jaipur",
      "latitude": 26.9124,
      "longitude": 75.7873,
      "distance": 0.5
    },
    {
      "id": 2,
      "name": "XYZ School",
      "address": "Ajmer",
      "latitude": 26.4499,
      "longitude": 74.6399,
      "distance": 120.45
    },
    {
      "id": 3,
      "name": "PQR School",
      "address": "Udaipur",
      "latitude": 24.5854,
      "longitude": 73.7125,
      "distance": 390.11
    }
  ]
}
```

Schools are automatically sorted from:

✅ Nearest School → ❌ Farthest School

---

# 📮 Postman Documentation

API documentation is available here:

👉 https://documenter.getpostman.com/view/47855768/2sBXqQGJM3

---

# 🌍 Deployment

The project is deployed on Render.

Live URL:

```bash
https://educase-assignment-5.onrender.com/
```

---

# 🧪 API Testing

You can test the APIs using:

- Postman
- Thunder Client
- cURL

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