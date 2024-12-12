const express = require("express")
const cors = require("cors");
const { addEmployeeService, getEmployeeByIdService, getAllEmployeesService, updateEmpService, getEmployeeByNameService } = require("../service/serviceLayer")

const app = express();

app.use(express.json());

app.use(cors());


app.post("/addEmp", (req, res) => {

    const ename = req.body.ename;
    const ecity = req.body.ecity;

    addEmployeeService(ename, ecity);
    res.send("Added!")
})


app.get("/getEmp/:id([0-9]+)", (req, res) => {
    const eid = req.params.id;
    getEmployeeByIdService(eid).then((data) => {
        res.send(data);
    })
});


app.get("/getEmpByName/:name([A-Za-z]+)", (req, res) => {
    const ename = req.params.name;
    getEmployeeByNameService(ename).then((data) => {
        res.send(data);
    })
})


app.get("/getAllEmp", async (req, res) => {

    const edata = await getAllEmployeesService();
    res.send(edata);

})

app.put("/updateEmp", (req, res) => {
    const eid = req.body.eid;
    const ename = req.body.ename;
    const ecity = req.body.ecity;

    updateEmpService(eid, ename, ecity);
    res.send("Record Updated!!")
})

// app.delete("/deleteEmp/:id")



app.listen(2222);
console.log("Server Running on Port:2222");
