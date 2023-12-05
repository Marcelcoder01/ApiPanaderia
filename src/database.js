const mysql = require("mysql2/promise");

//Aquí conectamos con la base de datos

const pool = mysql.createPool({
    
    
    host: process.env.DB_HOST         || "localhost",
    user: process.env.DB_USER         || "root",
    password: process.env.DB_PASSWORD || "Lahabana324b6",
    database: process.env.DB_NAME     || "panaderia",
    port: process.env.DB_PORT         || "3306",

    waitForConnections: true,
    connectionLimit: 10,
    maxIdle: 10, 
    idleTimeout: 60000, 
    queueLimit: 0,
    enableKeepAlive: true,
    keepAliveInitialDelay: 0

});

console.log("----------------------------------------------------------------------------------------------------")
console.log("------------------------------------------Connection is OK------------------------------------------")
console.log("----------------------------------------------------------------------------------------------------")


module.exports = { pool }