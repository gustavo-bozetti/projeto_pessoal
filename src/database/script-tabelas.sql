create database BD_MATH;
use BD_MATH;

drop database bd_math;

CREATE TABLE usuario (
    id_usuario INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100),
    senha varchar(100),
    fk_dino INT UNIQUE,
    src_icon varchar(100) default '/icons/icon-perfil.png',
	create_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (fk_dino) REFERENCES dino(id_dino)
)auto_increment=350;

CREATE TABLE dino (
    id_dino INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(50) DEFAULT 'Dino',
    nivel INT DEFAULT 1,
    xp INT DEFAULT 0,
    src_skin VARCHAR(150) DEFAULT '/person.png',
    fome INT DEFAULT 100,  
    energia INT DEFAULT 100,   
    create_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    update_at DATETIME null,
    ultimo_acesso DATETIME DEFAULT CURRENT_TIMESTAMP
);
CREATE TABLE dino_log (
    fk_dino INT NOT NULL,
	data_inicio DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    acao VARCHAR(20) NOT NULL, 
    data_fim DATETIME NULL,
    PRIMARY KEY (fk_dino, data_inicio),
    FOREIGN KEY (fk_dino) REFERENCES dino(id_dino)
);

INSERT INTO dino (id_dino, nome, nivel, xp, fome, energia) VALUES
(100, 'Rex Aventureiro', 5, 1200, 75, 50);
INSERT INTO usuario (id_usuario, nome, email, senha, fk_dino) VALUES
(350, 'Yasmim Souza', 'yasmim@gmail.com', 'senha123', 100);

INSERT INTO dino_log (fk_dino, acao, data_inicio, data_fim) VALUES
(100, 'ALIMENTAR', '2025-11-20 08:30:00', '2025-11-20 08:30:00');

INSERT INTO dino_log (fk_dino, acao, data_inicio, data_fim) VALUES
(100, 'DORMIR', '2025-11-20 12:00:00', '2025-11-20 13:00:00');

INSERT INTO dino_log (fk_dino, acao, data_inicio, data_fim) VALUES
(100, 'ALIMENTAR', '2025-11-20 13:30:00', '2025-11-20 13:30:00');

INSERT INTO dino_log (fk_dino, acao, data_inicio, data_fim) VALUES
(100, 'DORMIR', '2025-11-20 22:00:00', '2025-11-21 05:00:00');

INSERT INTO dino_log (fk_dino, acao, data_inicio, data_fim) VALUES
(100, 'ALIMENTAR', '2025-11-21 07:00:00', '2025-11-21 07:00:00');

INSERT INTO dino_log (fk_dino, acao, data_inicio, data_fim) VALUES
(100, 'DORMIR', '2025-11-21 01:00:00', NULL);


-- Buscar informações de dinossauro específico
SELECT * FROM dino join usuario on usuario.fk_dino = dino.id_dino
 where usuario.id_usuario = 350;

-- Total de horas durmidas de todas ações
SELECT 
    SEC_TO_TIME(SUM(TIME_TO_SEC(TIMEDIFF(data_fim, data_inicio)))) AS tempo_total_sono
FROM dino_log
WHERE fk_dino = 100 
  AND acao = 'DORMIR';
  
  -- Total de horas durmidas nessa ação
SELECT 
   TIMEDIFF(data_fim, data_inicio) AS tempo_total_sono
FROM dino_log
WHERE fk_dino = 100 
  AND acao = 'DORMIR';

-- Quantidade de vezes que se alimentou
SELECT 
    COUNT(*) AS total_vezes_alimentado
FROM dino_log
WHERE fk_dino = 100 
  AND acao = 'ALIMENTAR';
  
  -- Quantidade de vezes que durmiu
SELECT 
    COUNT(*) AS total_vezes_alimentado
FROM dino_log
WHERE fk_dino = 100 
  AND acao = 'DORMIR';
  
  
