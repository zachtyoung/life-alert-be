const express = require('express');
const cors = require("cors");
const helmet = require("helmet");
const Log = require('./database/model/log-model');
const server = express();
server.use(cors());
server.use(helmet());
server.use(express.json());


server.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", '*');
    res.header("Access-Control-Allow-Credentials", true);
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header("Access-Control-Allow-Headers", 'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json');
    next();
  });

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