const express = require('express');
//metodo express sendo requerido//
const users = ['marcia','ana','isabela'];
const server = express();
//servidor requerendo o metodo é uma function//
server.get('/', function(req,res){
    res.json('Hello Word');
});
server.get('/users', (req,res) =>{
    res.json(users);
});
server.get('/users/:index', (req,res) =>{
    const id = req.params.index;
    res.json(users[id]);
});

server.listen(3008);
//expus a porta//