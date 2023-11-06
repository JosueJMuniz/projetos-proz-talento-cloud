
INSIRA_OPERADOR = 0
PRIMEIRO_NUMERO = 0
SEGUNDO_NUMERO = 0
I = "S"


def calculadora(num1, num2, operador):
    resultado = 1
    if (operador == 1):
        resultado = num1 + num1
        print("Resultado: ", resultado)
    elif (operador == 2):
        resultado = num1 - num2
        print("Resultado: ", resultado)
    elif (operador == 3):
        resultado = num1 / num2
        print("Resultado: ", resultado)
    elif (operador == 4):
        resultado = num1 * num2
        print("Resultado: ", resultado)
    else:
        return 0


while I == "S":
    entrada = input("Deseja Iniciar a Calculadora: S/N")
    if entrada == I:
        INSIRA_OPERADOR = int(input(
            "Digite o numero correspondente a Operação: \n 1-Soma, 2-Subtração, 3-Divisão e 4-Multiplicação: \n"))
        if (INSIRA_OPERADOR == 0) or (INSIRA_OPERADOR > 4):
            print("Essa opção não existe!")
            continue

        PRIMEIRO_NUMERO = int(input("Insira o primeiro numero: "))
        SEGUNDO_NUMERO = int(input("Insira o segundo numero: "))

        calculadora(PRIMEIRO_NUMERO, SEGUNDO_NUMERO, INSIRA_OPERADOR)
    elif entrada != I:
        break
