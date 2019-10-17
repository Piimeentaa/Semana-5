const express = require('express');

const server = express();

server.get('/', function(req,res){
    return res.json('hello word');
});

server.get('/about', function(req,res){
    return res.json('about');
});

server.get('/users/:username', (req,res,next) => {
    return res.json(req.params);
});

server.get('/books/:bookId', (req,res,next) => {
    return res.json(req.params);
});

server.get('/users/:username/books/:bookId', (req,res,next) => {
    return res.json(req.params);
});
server.get('/search', (req,res,next) => {
    return res.json(req.query);
});


server.listen(3005);
