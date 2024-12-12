const con = require("../database/db_connect")

const addEmployee = ({ ename, ecity }) => {
    let sql = "insert into employee (name,city) values(?,?)";
    con.query(sql, [ename, ecity], (err, result) => {
        if (err) throw err;
        console.log("Data inserted Succcessfully");

    });

}


const getEmployeeById = (eid) => {
    let sql = "select * from employee where id=" + eid;
    return new Promise((resolve, reject) => {
        con.query(sql, (err, result) => {
            resolve(result);
        })
    })
}

const getEmployeeByName = (ename) => {
    let sql = `select * from employee where name like "%${ename}%"`;
    return new Promise((resolve, reject) => {
        con.query(sql, (err, result) => {
            if (err) throw err;
            resolve(result);
        })
    })
}

const getAllEmployees = () => {
    let sql = "select * from employee ";
    return new Promise((resolve, reject) => {
        con.query(sql, (err, result) => {
            if (err) throw err;
            resolve(result);
        })
    })

}


const updateEmp = ({ eid, ename, ecity }) => {

    let sql = "update employee set name = ? , city = ? where id =" + eid;
    con.query(sql, [ename, ecity], (err, result) => {
        if (err) throw err;
        console.log("Data Updated!!");

    })

}




module.exports = { addEmployee, getEmployeeById, getAllEmployees, updateEmp, getEmployeeByName }