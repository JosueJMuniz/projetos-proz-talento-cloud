function parimp(n) {
    if (n % 2 == 0) {
        return 'par';
    } else {
        return 'ímpar';
    }
}

let res = parimp(24);

console.log(res);