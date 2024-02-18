SELECT cliente_id, nome_cliente, nome_veiculo, num_placa, telefone FROM automoveis
LEFT JOIN cliente
ON  cliente.id_cliente = automoveis.cliente_id
UNION 
SELECT cliente_id, nome_cliente, nome_veiculo, num_placa, telefone FROM automoveis
RIGHT JOIN cliente
ON  cliente.id_cliente = automoveis.cliente_id