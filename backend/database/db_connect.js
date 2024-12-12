const mysql = require("mysql2")

const con = mysql.createConnection({
    port: 3306,
    host: "localhost",
    user: "root",
    password: "root24",
    database: "emp_db"
})

con.connect((err) => {
    if (err) throw err;
    console.log("Connection Established");

})


let sql = "create table if not exists employee (id int auto_increment primary key , name varchar(50), city varchar(50))"

con.query(sql, (err, result) => {
    if (err) throw err;
    console.log("Table Created Successfully");

})

module.exports = con;
