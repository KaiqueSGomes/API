const express = require('express');
const router = express.Router();

const userController = require("./userControllers");


//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrar", function (req, res) {
    userController.cadastrar(req, res);
})

router.post("/autenticar", function (req, res) {
    userController.autenticar(req, res);
});

module.exports = router;


