-- Criação da base de dados
CREATE DATABASE ExemploDB;

-- Utilização da base de dados criada
USE ExemploDB;

-- Criação da tabela "Clientes"
CREATE TABLE Clientes (
    ClienteID INTEGER PRIMARY KEY,
    Nome VARCHAR(100),
    Email VARCHAR(100)
);

-- Criação da tabela "Pedidos"
CREATE TABLE Pedidos (
    PedidoID INTEGER PRIMARY KEY,
    ClienteID INTEGER,
    Produto VARCHAR(50),
    Quantidade INTEGER,
    FOREIGN KEY (ClienteID) REFERENCES Clientes(ClienteID)
);
