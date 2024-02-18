SELECT cliente_id, nome_cliente, veiculo FROM automoveis
INNER JOIN cliente
ON  cliente.id_cliente = automoveis.cliente_id

