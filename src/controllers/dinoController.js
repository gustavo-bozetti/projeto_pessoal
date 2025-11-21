var dinoModel = require("../models/dinoModel");

function buscarDinoPorUsuario(req, res) {
  var idUsuario = req.params.dinoId;
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

function atualizar(req, res) {
  var idDino = req.body.idDino;
  var fome = req.body.fome;
  var energia = req.body.energia;
  var xp = req.body.xp;
  var nivel = req.body.nivel;

  if (idDino == undefined) {
    res.status(400).send("Seu idDino está undefined!");
  } else if (fome == undefined) {
    res.status(400).send("Sua fome está undefined!");
  } else if (energia == undefined) {
    res.status(400).send("Sua energia está undefined!");
  } else if (xp == undefined) {
    res.status(400).send("Seu xp está undefined!");
  } else if (nivel == undefined) {
    res.status(400).send("Seu nivel está undefined!");
  } else {
    dinoModel.atualizar(idDino, fome, energia, xp, nivel)
      .then(
        function (resultado) {
          res.json(resultado);
        }
      ).catch(
        function (erro) {
          console.log(erro);
          console.log(
            "\nHouve um erro ao atualizar o status do Dino! Erro: ",
            erro.sqlMessage
          );
          res.status(500).json(erro.sqlMessage);
        }
      );
  }
}


module.exports = {
  buscarDinoPorUsuario,
  atualizar
}