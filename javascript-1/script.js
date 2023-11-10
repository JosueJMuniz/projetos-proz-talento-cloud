
/* Acessando a propriedade innerText */

/* let elementoH1 = document.querySelector("h1");

console.log(elementoH1);
console.log(elementoH1.innerText); */



/* Acessando a propriedade innerHTML */

/* No arquivo script.js, vamos usar o console.log() mais 
duas vezes para imprimir nosso elementoMain, acessando as propriedades .innerText e .innerHTML: */

/* let elementoMain = document.querySelector("main");

console.log(elementoMain);
console.log(elementoMain.innerText);
console.log(elementoMain.innerHTML); */

/* Manipulando o DOM com innerText */

let elementoH1 = document.querySelector("h1");

elementoH1.innerText = "Novo título com JS";

/* Manipulando o DOM com innerHTML */

let elementoMain = document.querySelector("main");

elementoMain.innerHTML = `
<h2>Novo subtítulo</h2>
<ul>
    <li>Elemento da lista JS 01</li>
    <li>Elemento da lista JS 02</li>
    <li>Elemento da lista JS 03</li>
</ul>
`