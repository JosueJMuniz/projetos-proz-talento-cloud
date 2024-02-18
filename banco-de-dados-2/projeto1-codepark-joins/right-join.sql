SELECT cliente_id, nome_cliente, nome_veiculo FROM automoveis
RIGHT JOIN cliente
ON  cliente.id_cliente = automoveis.cliente_id