const { addEmployee, getEmployeeById, getAllEmployees, updateEmp, getEmployeeByName } = require("../dao/daoLayer");

const addEmployeeService = (ename, ecity) => {
    const empData = { ename: ename, ecity: ecity };
    addEmployee(empData);
    console.log("Data send by service layer");

}

const getEmployeeByIdService = (eid) => {
    return getEmployeeById(eid);
}

const getEmployeeByNameService = (ename) => {
    return getEmployeeByName(ename);
}


const getAllEmployeesService = async () => {
    return await getAllEmployees();
}

const updateEmpService = (eid, ename, ecity) => {
    const empData = { eid: eid, ename: ename, ecity: ecity };
    updateEmp(empData);
    console.log("Updating Emp Data through Service....");

}

module.exports = { addEmployeeService, getEmployeeByIdService, getAllEmployeesService, updateEmpService, getEmployeeByNameService }