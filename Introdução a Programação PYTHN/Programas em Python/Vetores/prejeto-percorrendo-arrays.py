lista_produtos = ['máscaras faciais', 'batons', 'esmaltes', 'perfumes', 'loções', 'xampus', 'sabonetes', 'delineadores']

qtd_produtos = len(lista_produtos)

for i in range(0, qtd_produtos, 1):
    """ print("\nTemos ", lista_produtos[i], "à venda!") """
    print(f"Temos {lista_produtos[i]}à venda!")