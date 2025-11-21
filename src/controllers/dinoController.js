var dinoModel = require("../models/dinoModel");

function buscarDinoPorUsuario(req, res) {
  var idUsuario = req.params.idUsuario;
  dinoModel.buscarDinoPorUsuario(idUsuario).then((resultado) => {
    if (resultado.length > 0) {
      res.status(200).json(resultado);
    } else {
      res.status(204).json([]);
    }
  }).catch(function (erro) {
    console.log(erro);
    console.log("Houve um erro ao buscar os Dinos: ", erro.sqlMessage);
    res.status(500).json(erro.sqlMessage);
  });
}


module.exports = {
  buscarDinoPorUsuario
}