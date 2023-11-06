def calculadora(num1, num2, op):
    if (op == 1):
        res = num1 + num2
    elif (op == 2):
        res = num1 - num2
    elif (op == 3):
        res = num1 * num2
    elif (op == 4):
        if (num2 != 0):
            res = num1 / num2
        else:
            raise Exception("Divisao por zero nao e possivel")
    else:
        raise Exception("operacao nao existe")
    return res


try:
    res = calculadora(2, 0, 4)
    print(res)
except Exception as err:
    print("ocorreu um erro")
    print(err)
