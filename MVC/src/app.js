const express = require("express")
const app = express()

//route
const index = require("./routes/index")
const professoras = require("./routes/professorasRoute")
//midlleware
app.use(function(req, res, next){
    res.header("Access-Control-Allow-Origin", "*")
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Contente-Type, Accept"
    )
    next()
})

app.use("/", index)
app.use("/professoras", professoras)
//aqui tudo pode ser usado na apicacao
module.exports = app