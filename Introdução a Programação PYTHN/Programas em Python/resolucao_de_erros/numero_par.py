""" Problema: Desenvolva um programa que só deve aceitar números pares. Siga as seguintes instruções:

caso um número ímpar seja digitado, informe ao usuário que ele digitou um valor ímpar e peça novamente por um número par;

caso uma letra seja digitada, informe ao usuário que ele digitou um caractere inválido e peça novamente por um número par. """
numeroCorreto = False
while True:
    print("Digite um numero par: ")

    try:
        num_par = int(input())
        if (num_par % 2 == 0):
            numeroCorreto = True
            print("Voce digitou um numero PAR!")
        else:
            print("Voce digitou um numero IMPAR!")
    except:
        print("Caracter invalido, insira um numero par!")
