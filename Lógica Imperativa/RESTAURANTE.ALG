Algoritmo "Restaurante"
// Disciplina   : [Linguagem e Lógica de Programação]
var
   QtdPessoas, QtdPessoas_maior, QtdPessoas_menor : inteiro
   fumantes, pet: caractere
   temfumantes, naotemfumantes,tempet, naotempet : inteiro

inicio
   EscrevaL("-----------------------------------------------")
   EscrevaL("       R E S T A U R A N T E   O R L A         ")
   EscrevaL("-----------------------------------------------")

   Escreva("O grupo possui algum fumante S/N ? ")
   Leia(fumantes)
   Se(fumantes = "S") entao
      temfumantes <- temfumantes + 1
   Senao
        Se (fumantes = "N") entao
           naotemfumantes <- naotemfumantes + 1
        FimSe
   FimSe
   Escreva("O grupo tem algum animal de estimacao S/N ? ")
   Leia(pet)
   Se (pet = "S") entao
      tempet <- tempet + 1
   Senao
        Se (pet = "N") entao
           naotempet <- naotempet + 1
        FimSe
   FimSe
   Escreva("Qual a quantidade de Pessoas ? ")
   Leia(QtdPessoas)
   Se (QtdPessoas >= 5) entao
       QtdPessoas_maior <- 1
   Senao
        Se (QtdPessoas < 5) entao
           QtdPessoas_menor <- 1
        FimSe
   FimSe
   EscrevaL("===============================================")
   Se ((temfumantes = 1) ou (tempet = 1)) entao
      EscrevaL("Clientes serao alocados na Area Externa!")
   Senao
        Se ((naotemfumantes = 1) e (naotempet = 1)e (QtdPessoas_menor = 1)) entao
           EscrevaL("Clientes serao alocados no Terreo")
        Senao
             Se ((naotemfumantes = 1) e (naotempet = 1) e (QtdPessoas_maior = 1)) entao
                EscrevaL("Clientes serao alocados no 1° Andar!")
             FimSe
        FimSe
   FimSe
fimalgoritmo