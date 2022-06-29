const router =require("express").Router();

const pool = require("./_helper/db");

router.get("/add",(request,response,next)=>{

pool.getConnection((error,connection)=>{
    
    if(error)
    {        
        connection.release();
        throw error;
    }
    let name = request.query.name;
    let location = request.query.location;
    connection.query("CALL add_departments(?,?)",[name,location],(err,rows)=>{
    connection.release();
        if(err)
        throw err;
if(rows.affectedRows >0)
        response.json({"status":"success"});
        else
        response.json({"status":"failure"});

    })
})

   
})


module.exports=router;