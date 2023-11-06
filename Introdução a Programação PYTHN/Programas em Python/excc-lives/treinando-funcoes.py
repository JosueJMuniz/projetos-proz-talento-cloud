def multiplicacao(num1, num2):
    resultado = str(num1 * num2)
    frase = str(num1) + " X " + str(num2) + " = " + resultado
    return frase

print(multiplicacao(10,4))

for i in range(1,11):
    frase = multiplicacao(9,i)
    print(frase)