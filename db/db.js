const mysql = require('mysql')
const db = require('db.config')

const connection = mysql.createConnection({
    host:db.host,
    user: db.host,
    password: db.password,
    database: db.database
})

connection.connect((err, result) => {
    if (err) console.log(err)
    console.log("Database-Connection Successful!")
})

module.exports = connection