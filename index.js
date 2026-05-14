const express = require('express');
require('dotenv').config();
const db = require('./dbconnection');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', require('./router'));

const PORT = process.env.PORT || 7000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});