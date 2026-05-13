const express = require('express');
const db = require('./dbconnection');
require('dotenv').config();


const app = express();
app.use(express.json());

app.use(express.urlencoded({ extended: true }));



//app.use('/', require('./router'));



const PORT = process.env.PORT || 7000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});