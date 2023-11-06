inicio = True

while (inicio == True):
    try:
        print("Deseja Começar S/N? \n")
        entrada = str(input())
        if (entrada != "S"):
            inicio = False
            continue
        print("Insira seu nome completo sem acentos: ")
        nome_completo = str(input())
        print("Informe o ano de nascimento: ")
        ano_nasc = int(input())
        if (ano_nasc < 1922) or (ano_nasc > 2021):
            print("Informe um ano de nascimento válido!")
        else:
            idade_atual = 2023 - ano_nasc
            print("\nSeu nome é: " + nome_completo)
            print("Sua idade atual é: " + str(idade_atual))
    except:
        print("Ocorreu um erro!\nTente Novamente!")
