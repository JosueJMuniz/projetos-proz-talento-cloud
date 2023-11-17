/* Concatenando Strings de forma simples com JS */

let nome = "Rafael";
let sobrenome = "Pereira";

let nomeCompleto = "Meu nome é: " + nome + " " + sobrenome;

console.log(nomeCompleto);


/* Interpolação de Strings com JS */

/* let templateString = `Meu nome é: `; */

let templateString = `Meu nome é: ${nome} ${sobrenome}`
console.log(templateString);

templateString = `Meu nome é ${nome}, meu sobrenome é ${sobrenome}`
console.log(templateString);

/* Usando Template String para somar números: */

let numA = 5;
let numB = 23;
let soma = `A soma de ${numA} e ${numB} é ${numA + numB}`
console.log(soma);