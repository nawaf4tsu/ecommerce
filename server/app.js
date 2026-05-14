const express = require('express')
const app = express()
const path = require('path')
const port = 4000;
app.use(express.static(path.join(__dirname, "public")))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const route = require('./routes/admin.route.js')
const productdata = require('./routes/productData.route.js')
const cors = require('cors')
app.use(cors())
const dns = require('dns');
const resolver = new dns.Resolver();
resolver.setServers(['8.8.8.8', '8.8.4.4']);



app.use('/', route)

app.use('/getdata' , productdata)


app.listen(port, (err) => {
    if (!err) {
        console.log("server running on http://localhost:" + port);


    }

})