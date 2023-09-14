

var mysql=require('mysql')
var con=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'shaik',
})
con.connect((err:any)=>{
    if(err)throw err;
    console.log('db connected')
let query="DELETE FROM student WHERE name='vinay'"
con.query(query,(err:any,res:any)=>{
    if(err)throw err
    console.log("deleted")
})
})