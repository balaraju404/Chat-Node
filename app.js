const express = require('express');
const cors = require('cors');
const mysql = require('mysql');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors()); 

const SERVER_PORT = 2004;

let connection = mysql.createConnection({
    host: "database-3.c1uwekss0ogn.us-east-1.rds.amazonaws.com",
    port: 3099, 
    user: "admin", 
    password: 'Balaraju404', 
    database: "restaurant_db"
});

connection.connect((err) => {
    if (err) {
        console.log('Error connecting to database: ' + err);
        return; // Exit if connection fails
    }
    console.log("Connected to the database");
});

app.listen(SERVER_PORT, () => {
    console.log('Listening on port ' + SERVER_PORT);
});
