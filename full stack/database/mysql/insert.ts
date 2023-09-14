

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
let query="INSERT INTO student(name, heroine) VALUES ('faizul','anushka')"
con.query(query,(err:any,res:any)=>{
    if(err)throw err
    console.log("inserted")
})
})