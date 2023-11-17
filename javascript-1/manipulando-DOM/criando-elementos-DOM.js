let elementoJS = document.createElement("li");

elementoJS.innerText = "JavaScript";


/* Nesse caso, sabemos que os elementos da nossa lista tem um id que os diferencia.
Dessa forma, podemos adicionar um id ao nosso elemento, 
usando a propriedade .id do elementoJavaScript, e atribuir a ele um valor. */

elementoJS.id = "ling-js";



/* Com o elemento criado, populado e manipulado, podemos adicioná-lo ao nosso site.
Para fazer isso, precisamos capturar o seu elemento pai via DOM e salvá-lo em uma variável.
Nesse caso, o elemento pai é a lista não ordenada com a classe Lista-linguagens. Sabendo disso, 
usaremos o método .querySelector para capturá-lo e guardá-lo dentro de uma variável.*/
let listaLinguagens = document.querySelector(".lista-linguagens");



/* Com o elemento da lista não ordenada salvo na variável listaLinguagens, podemos chamar essa variável 
e usar o método appendChild() para adicionar elementos nele.
Para fazer isso, basta passar o que deseja como argumento dentro dos parênteses.
No nosso exemplo, vamos adicionar o elementoJavaScript que criamos e manipulamos nas etapas anteriores. Observe a imagem. */
listaLinguagens.appendChild(elementoJS);



/* Adicionando elementos COMPLEXOS */

/* Criamos o elemento <div> para a postagem e guardamos ele na variável postagemJavaScript: */
const postagemJavaScript = document.createElement("div");


/* Usamos a propriedade innerHTML para inserir todo o conteúdo HTML das postagens em um template string: */
postagemJavaScript.innerHTML =
    `<h2 class="post-titulo">JavaScript</h2>
<p class="post-texto">
JavaScript é uma linguagem de programação!
</p>`

/* Nessa etapa, capturamos o elemento pai da nossa postagem e salvamos ele em uma variável: */

const postagens = document.querySelector(".postagens");

/* Nele, adicionamos o elemento postagemJavaScript através do método appendChild(). */

postagens.appendChild(postagemJavaScript);

/* Refazendo: Método 1 (Elementos Simples)*/

let elemento2 = document.createElement("li");

elemento2.innerText = "Python";

elemento2.id = "ling-python";

listaLinguagens.appendChild(elemento2);

/* Refazendo: Método 2 (Elementos complexos) */

const postagemPython = document.createElement("div");

postagemPython.innerHTML =
    `<h2 class="post-titulo">Python</h2>
<p class="post-texto">
    Python é uma linguagem amplamente utilizada em desenvolvimento de software, ciência de dados
    e machine learning(ML).
</p>
`
postagens.appendChild(postagemPython);