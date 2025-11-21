var express = require("express");
var router = express.Router();

var dinoController = require("../controllers/dinoController");

router.get("/:dinoId", function (req, res) {
  dinoController.buscarDinoPorUsuario(req, res);
});

router.put("/atualizar", function (req, res) {
  dinoController.atualizar(req, res);
});


module.exports = router;