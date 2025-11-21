var database = require("../database/config");

function buscarDinoPorUsuario(usuarioId) {

  var instrucaoSql = `SELECT * FROM dino join usuario on usuario.fk_dino = dino.id_dino where usuario.fk_dino = ${usuarioId}`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function atualizar(idDino, fome, energia, xp, nivel) {
  var instrucaoSql = `
        UPDATE dino SET 
            fome = ${fome},
            energia = ${energia},
            xp = ${xp},
            nivel = ${nivel},
            update_at = NOW(),
            ultimo_acesso = NOW()
        WHERE id_dino = ${idDino};
    `;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

module.exports = {
  buscarDinoPorUsuario,
  atualizar
}
