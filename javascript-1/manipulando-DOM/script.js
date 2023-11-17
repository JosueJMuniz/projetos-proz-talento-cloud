/* console.log("Olá Mundo");
const titulo = document.getElementById("titulo");

console.log(titulo); */

/* a gente não quer salvar todas essas informações na nossa variável titulo, senão apenas o elemento h2 com id 
“titulo”. Para isso, usaremos o método .getElementById() do objeto document e passaremos como argumento a string “titulo”. */

const titulo = document.getElementById("titulo");

console.log(titulo);

/* 
    se quisermos avessar vários elementos de uma só vez? Nossa primeira opção é usar o método .getElementsByClassName(), passar como 
    argumento a string “texto-simples”, e guardar o retorno numa variável. Usemos o console.log() para imprimir essa variável:
*/

const textos = document.getElementsByClassName("texto-simples");

console.log(textos);
console.log(textos[0]);

const segundoTitulo = document.querySelector("div h2");
console.log(segundoTitulo);

const textoPorClasse = document.querySelectorAll("texto-simples");

console.log(textoPorClasse);