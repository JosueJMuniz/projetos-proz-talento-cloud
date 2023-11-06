lista_frutas = ['melancia', 'banana', 'pera']
print(lista_frutas)
# Imprimirá: ['melancia', 'banana', 'pera']

lista_frutas[1], lista_frutas[2] = 'morango', 'abacaxi'
print(lista_frutas)
# Imprimirá: ['melancia', 'morango', 'abacaxi']

# Podemos inclusive atribuir o valor de um elemento do array, a outro elemento do mesmo array!

lista_frutas[1] = lista_frutas[0]
print(lista_frutas)
# Imprimirá: ['melancia', 'melancia', 'abacaxi']

# Agora vamos aprender a usar duas funções nativas de Python para adicionar e remover itens de um array. A primeira delas é a função append(), que em inglês significa “anexar” ou “acrescentar”

lista_frutas.append("lixia")
print(lista_frutas)

lista_frutas.pop()
print(lista_frutas)
