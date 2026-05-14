
const express = require('express')
const app = express()
const path = require('path')
const dns = require('dns')
dns.setServers(['8.8.8.8', '8.8.4.4']);
const PORT = 4000 
const {MongoClient} = require ("mongodb");
const client = new MongoClient(`mongodb+srv://zoebic:AV9NYAAxIRCbYMnY@strpr.sickbwz.mongodb.net/`)
app.use(express.static(path.join(__dirname)))
const router = express.Router();


async function myFunc() {
    await client.connect()
    console.log("connected");
    const db=client.db()    
    db.collection()
}
myFunc()

app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"userssub","index.html"))
})

app.post("/submit",(req,res)=>{
    res.send(req.body)
    
    
})

app.listen(PORT , ()=>{
    console.log('server is running on http://localhost:'+PORT);
    
})