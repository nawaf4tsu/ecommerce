const express = require('express')
const route = express.Router()
route.use(express.json())
route.use(express.urlencoded({ extended: true }));
const { MongoClient, Collection } = require('mongodb')
const dotenv = require('dotenv').config();
const envS = process.env;
const multer = require('multer');
const clodinary = require('cloudinary').v2;
const upload = require('../middleware/multer.js');
const path = require('path');
const cors = require('cors')
route.use(cors())
const dns = require('dns');
dns.setServers(['8.8.8.8', '8.8.4.4'])


clodinary.config({
    cloud_name: envS.CLOUDINARY_CLOUD_NAME,
    api_key: envS.CLOUDINARY_API_KEY,
    api_secret: envS.CLOUDINARY_SECRET_KEY
});

const client = new MongoClient(envS.MONGODB_API_URL)

route.post("/submit", upload.array('proImage', 10), async (req, res) => {

    try {

        const toUploadDefinePro = async () => {
            let idName = req.body.proSimpleName.replace(/\s/g, "").slice(0, 5).toUpperCase();
            let proData = {
                id: idName + Math.floor(100000 + Math.random() * 900000),
                proSimpleName: req.body.proSimpleName,
                proMrpPrice: req.body.proMrpPrice,
                proPrice: req.body.proPrice,
                proMainName: req.body.proMainName,
                proDescription: req.body.proDescription,
                proPosition: req.body.proPosition,
                proImages: req.body.proImage,
                category: req.body.category
            }
            toUpoadImages(proData)


            async function toUpoadImages(proData) {

                const uploadImages = [];
                console.log(proData);



                for (let i = 0; i < req.files.length; i++) {

                    if (req.files.length == i) {
                        console.log("imagesUploaded")
                    }
                    const file = req.files[i];
                    const space = 83790;
                    const result = await clodinary.uploader.upload(file.path, {
                        folder: 'newFolder',
                        public_id: `${proData.id}${space}${i}`
                    })

                    uploadImages.push(result.secure_url)
                }

                let finalProdData = {
                    id: proData.id,
                    proSimpleName: proData.proSimpleName,
                    proMrpPrice: proData.proMrpPrice,
                    proPrice: proData.proPrice,
                    proMainName: proData.proMainName,
                    proDescription: proData.proDescription,
                    proPosition: proData.proPosition,
                    category: proData.category,
                    proImages: uploadImages
                }
                toUploadMongo(finalProdData);

            }

            const toUploadMongo = async (dataToUpload) => {
                const db = client.db('zoebicStoreDB')
                const collection = db.collection('productCollection')
                await collection.insertMany([dataToUpload])
                console.log("product uploaded");


            }
        }
        toUploadDefinePro()
    } catch (err) {
        console.log(err);
    } finally {

        res.send('<h1>dataUploaded</h1><a href="/">goBackAndAddMoreProduct</a>')
    }
})

route.get('productData', (req, res) => {
    res.send("working")
})


const connectDbs = async () => {
    try {
        await client.connect()

    } catch (error) {
        console.log("thi sis why cant connect 👺👺👺" + error);
    }
}

connectDbs();


route.delete("/", (req, res) => {
    let listOfPro = document.getElementById("listProCategory");

    listOfPro.innerHTML = ""
})


module.exports = route;