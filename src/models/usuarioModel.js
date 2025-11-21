var database = require("../database/config")

function autenticar(email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", email, senha)
    var instrucaoSql = `
            SELECT
            u.id_usuario,
            u.nome AS nome_usuario,
            u.email,
            u.src_icon,
            d.id_dino,
            d.nome AS nome_dino, 
            d.nivel,
            d.xp,
            d.src_skin,
            d.fome,
            d.energia,
            d.ultimo_acesso
        FROM 
            usuario AS u
        JOIN 
            dino AS d ON u.fk_dino = d.id_dino
        WHERE 
            u.email = '${email}' 
            AND u.senha = '${senha}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

// Coloque os mesmos parâmetros aqui. Vá para a var instrucaoSql
function cadastrar(nome, email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome, email, senha);

    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoSql = `
        
    INSERT INTO dino (nome) VALUES ('Dino');
    INSERT INTO usuario (nome, email, senha, fk_dino)
        VALUES ('${nome}', '${email}', '${senha}', LAST_INSERT_ID());
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    autenticar,
    cadastrar
};