DELIMITER $$
CREATE TRIGGER inserir_dados
AFTER INSERT ON cliente FOR EACH ROW
BEGIN 
	IF NEW .cpf IS NULL THEN
    INSERT INTO lembrete(cliente, mensagem)
    VALUES (new.id, CONCAT('Oi', NEW.nome, 'atualize seu nome'));
    END IF;
END $$
