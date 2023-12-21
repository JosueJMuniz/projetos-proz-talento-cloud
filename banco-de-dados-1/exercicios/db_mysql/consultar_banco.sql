-- Consulta utilizando INNER JOIN para obter detalhes dos pedidos e clientes
SELECT Clientes.Nome, Pedidos.Produto, Pedidos.Quantidade
FROM Clientes
INNER JOIN Pedidos ON Clientes.ClienteID = Pedidos.ClienteID;
