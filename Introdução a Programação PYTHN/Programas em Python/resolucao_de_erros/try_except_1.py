print("Insira um numero: ")
try:
    valor = int(input())
    valor = valor + 5
    print("O valor digitado + 5 é igual a: " + str(valor))
except:
    print("não foi digitado um numero!")
