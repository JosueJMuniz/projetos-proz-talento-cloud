/* 
    Arrow functions redefinem como o THIS é tratado dentro
    da função e consequentemente altera o seu uso

    EXEMPLOS

*/

/* FUNÇÃO ANONIMA COMUM */

const func = function () {
    console.log(this)
}

/*  ARROW FUNCTION */
const arrowFunc = () => console.log(this)

func()
arrowFunc()