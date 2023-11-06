print("Digite o seu nome: ")
nome = input()

executar = True

while (executar == True):
    print("Digite se ano de nascimento: ")
    try:
        ano = int(input())
        if (ano < 1992) or (ano > 2023):
            print("O ano precisa ser entre 1922 ou 2023")
        else:
            idade = 2023 - ano
            print("O usuario", nome, "completou ou completará",
                  idade, "anos de idade em 2023")
            executar = False
    except:
        print("Os anos precisam ser escritos apenas com numeros!")
