
import {MongoClient} from 'mongodb'
let myaddress="mongodb://127.0.0.1:27017"
let client=new MongoClient(myaddress)
let dbName="Faizul_Mateen"
async function dblink() {
    await client.connect();
    console.log('Connected Successfully To Server');
    const db=client.db(dbName);
    const collection=db.collection('Student');   
    await collection.insertOne({name:'parents',Areaofinterest:'caring'}) 
    console.log("inserted")
}
dblink()





// //import {MongoClient} from 'mongodb'
// let {MongoClient}=require('mongodb')
// let myaddress="mongodb://127.0.0.1:27017"

// let client=new MongoClient(myaddress)
// let dbName="Apponix-CRAZY-WAR-july18"

// async function dbLink(){
//   await  client.connect();
//   console.log('Connected successfully to server');
//   const db = client.db(dbName);
//   const collection = db.collection('student');
//  await collection.insertOne({name:'ravi',heroin:'vidya balan'})
//  console.log("inserted")
// }
// dbLink()