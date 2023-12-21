-- Criação do trigger para atualizar a quantidade total de pedidos por cliente
CREATE TRIGGER AtualizarQuantidadePedidos
AFTER INSERT ON Pedidos
BEGIN
    UPDATE Clientes
    SET TotalPedidos = (
        SELECT COUNT(*)
        FROM Pedidos
        WHERE Pedidos.ClienteID = NEW.ClienteID
    )
    WHERE Clientes.ClienteID = NEW.ClienteID;
END;
