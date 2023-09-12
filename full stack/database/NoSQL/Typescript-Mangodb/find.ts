
import {MongoClient} from 'mongodb'
let myaddress="mongodb://127.0.0.1:27017"
let client=new MongoClient(myaddress)
let dbName="Faizul_Mateen"
async function dblink() {
    await client.connect();
    console.log('Connected Successfully To Server');
    const db=client.db(dbName);
    const collection=db.collection('Student');   
    await collection.findOne({name:'parents',Areaofinterest:'caring'}) 
    console.log("inserted")
}
dblink()
