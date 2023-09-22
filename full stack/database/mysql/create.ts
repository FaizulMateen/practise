var mysql=require('mysql')
var con=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:''
})
con.connect((err:any)=>{
if(err)throw err;
console.log('db connected'),
con.query("CREATE DATABASE shaik",(err:any,res:any)=>{
    if(err)throw err;
    console.log("db created")
})
})




//var mysql=require('mysql')
