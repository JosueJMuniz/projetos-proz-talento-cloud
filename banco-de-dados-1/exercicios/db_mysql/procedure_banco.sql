-- Criação da procedure para o levantamento diário da quantidade de produtos comprados
CREATE PROCEDURE RelatorioProdutosCompradosPorDia()
BEGIN
    SELECT DATE(DataCompra) AS Dia, SUM(Quantidade) AS TotalProdutosComprados
    FROM Pedidos
    WHERE DATE(DataCompra) = DATE(NOW()) -- Filtra apenas os pedidos do dia atual
    GROUP BY DATE(DataCompra);
END;
