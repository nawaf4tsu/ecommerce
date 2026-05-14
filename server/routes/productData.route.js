const express = require('express')
const dataroute = express.Router()
dataroute.use(express.json())
const { MongoClient } = require('mongodb')
const dotenv = require('dotenv').config();
const envS = process.env;
const dns = require('dns');
dns.setServers(['8.8.8.8', '8.8.4.4'])
const cors = require('cors')
dataroute.use(cors())


const client = new MongoClient(envS.MONGODB_API_URL)


const connectDbs = async () => {
    await client.connect()
    console.log('connected')
}

connectDbs();

dataroute.get('/',async (req, res) => {

    try {
        const db = client.db('zoebicStoreDB');
        data = await db.collection('productCollection')
        .find()
        .toArray();

        res.send(data)


    } catch (error) {
        console.log(error);

    }

})



module.exports = dataroute