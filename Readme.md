# School Management API

This is a Node.js assignment project for Educase.

The API allows users to:
- Add schools
- Get schools sorted by nearest location

---

## Tech Stack

- Node.js
- Express.js
- MySQL

---

## Installation

Clone the repository:

git clone https://github.com/your-username/school-management-api.git

Install dependencies:

npm install

---

## Environment Variables

Create a `.env` file and add:

PORT=5000

DB_HOST=localhost

DB_USER=root

DB_PASSWORD=yourpassword

DB_NAME=school_management

---

## Database Setup

Create database:

CREATE DATABASE school_management;

Use database:

USE school_management;

Create table:

CREATE TABLE schools (
id INT AUTO_INCREMENT PRIMARY KEY,
name VARCHAR(255) NOT NULL,
address VARCHAR(255) NOT NULL,
latitude FLOAT NOT NULL,
longitude FLOAT NOT NULL
);

---

## Run Project

Development:

npm run dev

Production:

npm start

---

## API Endpoints

### Add School

POST /addSchool

Request Body:

{
"name": "ABC School",
"address": "Jaipur",
"latitude": 26.9124,
"longitude": 75.7873
}

---

### List Schools

GET /listSchools?latitude=26.9124&longitude=75.7873

---

## Deployment

Hosted on Render.

---

## Author

Dolisha