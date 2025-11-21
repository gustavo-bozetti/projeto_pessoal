var express = require("express");
var router = express.Router();

var dinoLogController = require("../controllers/dinoLogController");

router.get("/:dinoId", function (req, res) {
  dinoLogController.buscardinoLogsPorDino(req, res);
});

router.post("/cadastrar", function (req, res) {
  dinoLogController.cadastrar(req, res);
})

module.exports = router;