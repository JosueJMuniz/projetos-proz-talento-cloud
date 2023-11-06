
INSIRA_OPERADOR = 0
PRIMEIRO_NUMERO = 0
SEGUNDO_NUMERO = 0

PRIMEIRO_NUMERO = int(input("Insira o primeiro numero: "))
SEGUNDO_NUMERO = int(input("Insira o segundo numero: "))
INSIRA_OPERADOR = int(input(
    "Digite o numero correspondente a Operação: \n 1-Soma, 2-Subtração, 3-Divisão e 4-Multiplicação: \n"))


def calculadora(num1, num2, operador):
    resultado = 1
    if operador == 1:
        resultado = num1 + num1
        print("Resultado: ", resultado)
    elif operador == 2:
        resultado = num1 - num2
        print("Resultado: ", resultado)
    elif operador == 3:
        resultado = num1 / num2
        print("Resultado: ", resultado)
    elif operador == 4:
        resultado = num1 * num2
        print("Resultado: ", resultado)
    else:
        return 0


calculadora(PRIMEIRO_NUMERO, SEGUNDO_NUMERO, INSIRA_OPERADOR)
