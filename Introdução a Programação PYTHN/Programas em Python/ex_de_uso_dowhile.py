contador = 0
secret_word = "python"
while True:
    word = input("Insira a palavra secreta: ").lower()
    contador = contador + 1
    if word == secret_word:
        break
    if word != secret_word and contador > 7:
        break