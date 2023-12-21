-- Criação da função para somar clientes cadastrados em um dia específico
CREATE FUNCTION SomarClientesDia(dataSelecionada DATE)
RETURNS INT
BEGIN
    DECLARE totalClientes INT;

    SELECT COUNT(ClienteID) INTO totalClientes
    FROM Clientes
    WHERE DATE(DataCadastro) = dataSelecionada;

    RETURN totalClientes;
END;
