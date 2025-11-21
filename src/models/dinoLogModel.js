var database = require("../database/config");

function buscarDinoLogPorDino(dinoId) {
  var instrucaoSql = `SELECT 
            acao,
            DATE_FORMAT(data_inicio, '%d/%m/%Y às %H:%i') as inicio_formatado,
            DATE_FORMAT(data_fim, '%H:%i') as fim_formatado,
            data_fim -- Trazemos a data crua também para saber se é null
        FROM dino_log 
        WHERE fk_dino = ${dinoId} 
        ORDER BY data_inicio DESC limit 20;`;
  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function qtdMetricasSono(idDino) {
    var instrucaoSql = `
        SELECT 
            COUNT(*) as qtd_dormiu,
            SEC_TO_TIME(SUM(TIMESTAMPDIFF(SECOND, data_inicio, data_fim))) as total_tempo_dormiu
        FROM dino_log 
        WHERE fk_dino = ${idDino} 
        AND acao = 'DORMIR';
    `;
    return database.executar(instrucaoSql);
}

function qtdComida(idDino) {
    var instrucaoSql = `
          SELECT 
          COUNT(*) AS total_vezes_alimentado
          FROM dino_log
          WHERE fk_dino = ${idDino} 
          AND acao = 'ALIMENTAR';
          
    `;
    return database.executar(instrucaoSql);
}


function cadastrar(dinoId, acao,data_inicio, data_fim) {
  var instrucaoSql = '' 
  if(data_fim == null || data_inicio == null){
     instrucaoSql = `INSERT INTO dino_log (fk_dino, acao) VALUES
     (${dinoId}, '${acao}'); `
  }else{
     instrucaoSql = `INSERT INTO dino_log (fk_dino, acao,data_inicio, data_fim) VALUES
     (${dinoId}, '${acao}','${data_inicio}', '${data_fim}'); `
  }
  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

module.exports = {
  buscarDinoLogPorDino,
  qtdMetricasSono,
  qtdComida,
  cadastrar
}
