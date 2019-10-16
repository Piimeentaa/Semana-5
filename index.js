const express = require('express');

const server = express();

server.get('/', function(req,res){
    res.send('hello word');
});

server.get('/about', function(req,res){
    res.send('about');
});

server.get('/users/:username', (req,res,next) => {
    res.send(req.params);
});

server.get('/books/:bookId', (req,res,next) => {
    res.send(req.params);
});

server.get('/users/:username/books/:bookId', (req,res,next) => {
    res.send(req.params);
});


server.listen(3005);
