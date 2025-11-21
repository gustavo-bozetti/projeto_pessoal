var database = require("../database/config");

function buscarDinoPorUsuario(usuarioId) {

  var instrucaoSql = `SELECT * FROM dino join usuario on usuario.fk_dino = dino.id_dino where usuario.id_usuario = ${usuarioId}`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

module.exports = {
  buscarDinoPorUsuario,
}
