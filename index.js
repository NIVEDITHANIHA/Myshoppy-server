/* import Dotenv  */
require("dotenv").config()
/* import Express */
const express = require("express")
/* import Cors */
const cors = require("cors")
/* import Router */
const router = require('./routing/router')
/* create a server using express */
const ecommerceServer = express()
/* server use cors */
ecommerceServer.use(cors())

/* import Db */
require('./Db/connectionString')
/* json to parse */
ecommerceServer.use(express.json())

/* server Use router */
ecommerceServer.use(router)
/* use Port */
const port = 3000 || process.env.port

ecommerceServer.listen(port, () => {

    console.log(`ecommerceServer is listening  at ${port}`);

})

ecommerceServer.get("/",(req,res)=>{
    res.send('<h1>heloooo</h1>')
})
