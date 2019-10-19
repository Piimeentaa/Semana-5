const express = require("express")
const router = express.Router()
const controller = require("../controllers/professorasController")//recebe o direcionamento de routes e gerencia as requisicoes

router.get("/", controller.get)
router.get("/:id", controller.getById)

module.exports = router