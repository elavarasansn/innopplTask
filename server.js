const app = require("express")();

const department = require("./departments");
const employee = require("./employee");
const projects = require("./projects");
app.get("/",(request,response,next)=>{

    response.json({"status":"success"})
})

app.use("/department",department);
app.use("/employee",employee);
app.use("/projects",projects);

app.listen(9000,()=>{
    console.log("server running on 9000")
})