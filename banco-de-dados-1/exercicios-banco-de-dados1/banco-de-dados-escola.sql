CREATE DATABASE escola;
USE escola;

CREATE TABLE aluno (
  id int unsigned PRIMARY KEY NOT null AUTO_INCREMENT,
  nome varchar (50) NOT null,
	matricula int (6) NOT null,
  email varchar (50) NOT null,
  endereco varchar (50) NOT null,
	telefone int (11) NOT null
);

INSERT INTO aluno (id, nome, matricula, email, endereco, telefone)
VALUES (01, 'João Carlos', 1234, 'jcarlos@gmail.com', 'Rua 13 de maio', 1178254489),
(02, 'José Vitor', 2345, 'jvitor@gmail.com', 'Rua da saudade', 1178256589),
(03, 'Paulo André', 3456, 'pandr@gmail.com', 'Rua do sol', 1178254495);

SELECT * FROM aluno
