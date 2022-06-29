const router =require("express").Router()

router.get("/add",(request,response,next)=>{

   
pool.getConnection((error,connection)=>{
    
    if(error)
    {        
        connection.release();
        throw error;
    }
    let project = request.query.project;
    let type = request.query.type;
    let id = request.query.id;
    connection.query("CALL add_projects(?,?,?)",[project,type,id],(err,rows)=>{
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