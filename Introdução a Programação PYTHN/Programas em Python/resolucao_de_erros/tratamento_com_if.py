def calculadora(num1, num2, op):
    if (op == 1):
        res = num1 + num2
    elif (op == 2):
        res = num1 - num2
    elif (op == 3):
        res = num1 * num2
    elif (op == 4) and (num2 != 0):
        res = num1 / num2
    else:
        res = "erro"
    return res


res = calculadora(2, 0, 4)
if (res == "erro"):
    print("Ocorreu um erro")
else:
    print(res)
