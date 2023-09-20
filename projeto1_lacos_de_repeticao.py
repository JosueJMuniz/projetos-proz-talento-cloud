# SOLUÇÃO 1 FOR

""" contador = 0

for contador in range(20, 0, -1):
    if(contador == 13):
        continue
    print(str("Andar: "), contador)

 """
 
# SOLUÇÃO 2 WHILE

""" i = 21

while (i != 0):
    
    i = i - 1
    if (i == 13):
        continue
    
    print(i) """
    
    
# SOLUÇÃO 3 DO-WHILE

i = 21
entrada = "S" 

while True:
    letra = input("Deseja começar? S/N: ").upper()
    i = i - 1
    if  letra == entrada:
        break
    if letra != entrada:
        break
    if i == 13:
        continue
    
    print(i)

