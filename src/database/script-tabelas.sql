 -- BANCO DE DADOS ----------------------------------------------------
CREATE DATABASE kaique;
USE kaique;

-- USUARIOS -----------------------------------------------------------

CREATE USER 'kaiqueGomes'@'localhost'

 -- TABELAS -----------------------------------------------------------
CREATE TABLE user /* 8 colunas */
	(userId INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50) NOT NULL,
    email VARCHAR(256) NOT NULL,
    cpf CHAR(11) NOT NULL,	
    senha VARCHAR(30) NOT NULL
) AUTO_INCREMENT = 1000;