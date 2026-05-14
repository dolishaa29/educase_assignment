const mysql = require('mysql2/promise');
require('dotenv').config();

const db = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
    waitForConnections: true,
    connectionLimit: 10
});

async function connectDB() {
    try 
    {
        const connection = await db.getConnection();
        console.log('MySQL database Connected');

        const createTableQuery = `
            CREATE TABLE IF NOT EXISTS schools (
                id INT AUTO_INCREMENT PRIMARY KEY,
                name VARCHAR(255) NOT NULL,
                address TEXT NOT NULL,
                latitude DECIMAL(10,6) NOT NULL,
                longitude DECIMAL(10,6) NOT NULL
            )
        `;

        await connection.query(createTableQuery);

        console.log('Schools table ready');

        connection.release();
    } 
    catch (error) 
    {
        console.log('MySQL database Connection Failed');
        console.log(error.message);
    }
}

connectDB();

module.exports = db;