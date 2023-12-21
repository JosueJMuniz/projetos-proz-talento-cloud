-- Inserir dados na tabela Clientes
INSERT INTO Clientes (Nome, Email) VALUES ('João', 'joao@email.com');
INSERT INTO Clientes (Nome, Email) VALUES ('Maria', 'maria@email.com');

-- Inserir dados na tabela Pedidos
INSERT INTO Pedidos (ClienteID, Produto, Quantidade) VALUES (1, 'Camiseta', 2);
INSERT INTO Pedidos (ClienteID, Produto, Quantidade) VALUES (2, 'Calça', 1);
