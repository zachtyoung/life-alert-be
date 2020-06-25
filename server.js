const express = require('express');
const cors = require("cors");

const server = express();
server.use(cors());
server.use(express.json());
server.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE")
    next();
  });
const Log = require('./database/model/log-model');
server.get('/', (req, res) => {
    Log.get()
    .then(data =>{
        res.status(200).json({"message":"Up and running", "data":data })
    })

});
server.post('/', (req, res) => {
    Log.add({})
    .then(data =>{
        res.status(200).json(data)
    })
    .catch(err =>{
        console.log(err)
        res.status(400).json(err)
    })

});




module.exports = server;