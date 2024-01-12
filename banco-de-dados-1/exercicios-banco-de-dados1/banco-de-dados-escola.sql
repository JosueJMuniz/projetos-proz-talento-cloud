create database escola;

use escola;

create table Aluno(
  	id int unsigned not null auto_increment primary key,
    nome varchar(35) not null,
    email varchar(50),
    endereco varchar(60)
);
