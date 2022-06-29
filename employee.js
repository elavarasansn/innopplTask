const router =require("express").Router()

router.get("/add",(request,response,next)=>{


    pool.getConnection((error,connection)=>{
    
        if(error)
        {        
            connection.release();
            throw error;
        }
        let name = request.query.name;
        let sex = request.query.sex;
        let address = request.query.address;
        let dob = request.query.dob;
        let id = request.query.id;

        connection.query("CALL add_employee(?,?,?,?,?)",[name,sex,address,dob,id],(err,rows)=>{
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