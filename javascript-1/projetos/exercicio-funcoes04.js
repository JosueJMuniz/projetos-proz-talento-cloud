/* Funções Recurcivas
    São funções que chamam a si mesmas.

*/
/* 
    !5 = 4 * 3 * 2 * 1 e também
    !5 = 5 * !4

    !n = n * (n-1)!
*/

function fatorial(n) {
    if (n == 1) {
        return 1;

    } else {
        return n * fatorial(n - 1);

    }
}

console.log(fatorial(7));