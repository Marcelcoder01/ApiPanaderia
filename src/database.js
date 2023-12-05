const mysql = require("mysql2/promise");

//Aquí conectamos con la base de datos

const pool = mysql.createPool({
    
    
    host: process.env.DB_HOST         || "bupykhzewtizasgw3aaz-mysql.services.clever-cloud.com",
    user: process.env.DB_USER         || "urdvf0cwh2rqfeu6",
    password: process.env.DB_PASSWORD || "6QqyhovEFTVrknm0VbIk",
    database: process.env.DB_NAME     || "bupykhzewtizasgw3aaz",
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