function recebeNum(numA, numB) {
    let frase1 = `${numA} + ${numB} = ${numA + numB}`
    let frase2 = `${numA} + ${numB} = ${numA - numB}`
    let frase3 = `${numA} + ${numB} = ${numA * numB}`
    let frase4 = `${numA} + ${numB} = ${numA / numB}`
    console.log(frase1);
    console.log(frase2);
    console.log(frase3);
    console.log(frase4);
}

recebeNum(4, 5);

/* Outra forma de fazer isso */
function operacoes(num1, num2) {

    op1 = num1 + num2;

    op2 = num1 - num2;

    op3 = num1 * num2;

    op4 = num1 / num2;

    console.log(`
    Adição: 4+5 = ${op1}
    Subtração: 4-5 = ${op2}
    Multiplicação: 4x5 = ${op3}
    Divisão: 4/5 = ${op4}`);
}

operacoes(4, 5);

/*  GABARITO */

function imprimirOperacoes(a, b) {
    console.log(`${a} + ${b} = ${a + b}`)
    console.log(`${a} - ${b} = ${a - b}`)
    console.log(`${a} x ${b} = ${a * b}`)
    console.log(`${a} / ${b} = ${a / b}`)
}

imprimirOperacoes(4,5);