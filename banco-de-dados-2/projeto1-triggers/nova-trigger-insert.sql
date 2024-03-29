-- CRIANDO TRIGGER:
CREATE TRIGGER tr_desconto BEFORE INSERT
ON produto
FOR EACH ROW
SET NEW.preco_desconto = (NEW.preco_normal * 0.90);

INSERT INTO produto (nome_produto, preco_normal)
VALUES ('PRATO FEITO', 1.00)

