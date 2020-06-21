const express = require('express');
const server = express();
const Log = require('./database/model/log-model');
server.use(express.json());


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