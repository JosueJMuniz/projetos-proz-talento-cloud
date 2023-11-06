qtdRodas = 5
pesoBrutoKg = 6555
qtdPassageiros = 2

""" print("Qual a quantidade de rodas no veículo ?\n")
qtdRodas = input(int(qtdRodas))
print("Insira o peso bruto em quilogramas ?")
pesoBrutoKg = input(float(pesoBrutoKg))
print("Qual a quantidade de pessoas no veículo ?\n")
qtdPassageiros = input(int(qtdPassageiros)) """

if (qtdRodas <= 3):
    print("Categoria: A")
elif (qtdRodas == 4) and (qtdPassageiros == 8) and (pesoBrutoKg < 3500):
    print("Categoria: B")
elif (qtdRodas >= 4) and (pesoBrutoKg >= 3500) and (pesoBrutoKg < 6000):
    print("Categoria: C")

if (qtdRodas >= 4) and (qtdPassageiros > 8):
    print("Categoria: D")
elif (qtdRodas > 4) and (pesoBrutoKg > 6000):
    print("Categoria: E")
else:
    print("Veículo não reconhecido!")
