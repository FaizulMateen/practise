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
let query="CREATE TABLE student(name VARCHAR(255), heroine VARCHAR(255))"
con.query(query,(err:any,res:any)=>{
    if(err)throw err
    console.log("table created")
})
})



     