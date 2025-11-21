var dinoLogModel = require("../models/dinoLogModel.js");

function buscardinoLogsPorDino(req, res) {
  var dinoId = req.params.dinoId;

  dinoLogModel.buscarDinoLogPorDino(dinoId).then((resultado) => {
    if (resultado.length > 0) {
      res.status(200).json(resultado);
    } else {
      res.status(204).json([]);
    }
  }).catch(function (erro) {
    console.log(erro);
    console.log("Houve um erro ao buscar os dinoLogs: ", erro.sqlMessage);
    res.status(500).json(erro.sqlMessage);
  });
}

function qtdComida(req, res) {
  var dinoId = req.params.dinoId;

  dinoLogModel.qtdComida(dinoId).then((resultado) => {
    if (resultado.length > 0) {
      res.status(200).json(resultado);
    } else {
      res.status(204).json([]);
    }
  }).catch(function (erro) {
    console.log(erro);
    console.log("Houve um erro ao buscar os dinoLogs: ", erro.sqlMessage);
    res.status(500).json(erro.sqlMessage);
  });
}
function qtdMetricasSono(req, res) {
  var dinoId = req.params.dinoId;

  dinoLogModel.qtdMetricasSono(dinoId).then((resultado) => {
    if (resultado.length > 0) {
      res.status(200).json(resultado);
    } else {
      res.status(204).json([]);
    }
  }).catch(function (erro) {
    console.log(erro);
    console.log("Houve um erro ao buscar os dinoLogs: ", erro.sqlMessage);
    res.status(500).json(erro.sqlMessage);
  });
}


function cadastrar(req, res) {
  var dinoId = req.body.dinoId;
  var acao = req.body.acao;
  var data_inicio = req.body.data_inicio;
  var data_fim = req.body.data_fim;

  if (acao == undefined) {
    res.status(400).send("acao está undefined!");
  } else if (dinoId == undefined) {
    res.status(400).send("dinoId está undefined!");
  } else {
    dinoLogModel.cadastrar(dinoId, acao,data_inicio, data_fim)
      .then((resultado) => {
        res.status(201).json(resultado);
      }
      ).catch((erro) => {
        console.log(erro);
        console.log(
          "\nHouve um erro ao realizar o cadastro do log! Erro: ",
          erro.sqlMessage
        );
        res.status(500).json(erro.sqlMessage);
      });
  }
}

module.exports = {
  buscardinoLogsPorDino,
  qtdMetricasSono,
  qtdComida,
  cadastrar
}