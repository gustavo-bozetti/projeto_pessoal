var database = require("../database/config");

function buscarDinoLogPorDino(dinoId) {

  var instrucaoSql = `SELECT * FROM dino_log join dino on dino_log.fk_dino = dino.id_dino
                    where dino.id_dino = ${dinoId};`;
  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function cadastrar(dinoId, acao, data_fim) {
  
  var instrucaoSql = '' 
  if(data_fim == null){
     instrucaoSql = `INSERT INTO dino_log (fk_dino, acao) VALUES
     (${dinoId}, '${acao}'); `
  }else{
     instrucaoSql = `INSERT INTO dino_log (fk_dino, acao, data_fim) VALUES
     (${dinoId}, '${acao}', '${data_fim}'); `
  }

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}


module.exports = {
  buscarDinoLogPorDino,
  cadastrar
}
