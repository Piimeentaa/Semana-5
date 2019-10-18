const express = require('express');
//metodo express sendo requerido//
const users = ['marcia','ana','isabela'];
const livros = ['the book','o livro','O cortiço'];
const server = express();
//servidor requerendo o metodo é uma function//
function checkUserInArray(req,res,next){
    const user = users(req.params.index)
        if(!user){
        return res.status(400).json("esta posição não existe");
}
req.user = user;
return next();
}
// function checkLivrosInArray(req,res,next){
//     const book = livros(req.params.indexB)
//     if(!book){
//         return res.status(400).json({erros: 'index doesnt existis'});
//     }
//     req.book = book;
//     return next();
// }
server.get('/', function(req,res){
    res.json('Hello Word');
});
server.get('/users',(req,res) =>{
    res.json(users);
});
server.get('/users/:index', checkUserInArray , (req,res) =>{
    const id = req.params.index;
    res.json(users[id]);
});
server.get('/books/:index',(req,res) =>{
    const id = req.params.index;    
    res.json(livros[id]);
});
server.get('/books/:indexB/users/:indexU', (req,res,next) =>{  
   const idB = req.params.indexB;
   const idU = req.params.indexU;
   const tudo = livros[idB] + ' ' + users[idU];

    res.json(tudo);
});
server.get('/country', (req,res,next) =>{   
    res.json(req.query.pais);
});


server.listen(3008);
//expus a porta//