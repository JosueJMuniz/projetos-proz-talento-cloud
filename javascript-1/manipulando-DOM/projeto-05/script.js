const elementoJS = document.createElement("div");

elementoJS.class = "titulo";

console.log(elementoJS);

const elementoPai = document.querySelector("body");
elementoPai.appendChild(elementoJS);

 const elementoConteudo = document.createElement("ul");
elementoConteudo.innerHTML =
`<h1 id="post-titulo">Produtos: </h1>
<ul class="lista-produtos">
    <li id="sorvete">
        <h3>Sorvete de Creme - $ 17,50</h3>
        <img src="./sorvete-creme.png">
        <li>Detalhes do produto:
            <p>
            É uma escolha clássica e atemporal, sendo uma opção querida por muitas pessoas em diversas ocasiões. Pode ser saboreado puro, acompanhando outras sobremesas ou utilizado em receitas de milkshakes, sundae e outras criações culinárias. É preparado de forma a obter uma textura cremosa e aveludada, garantindo uma experiência agradável ao degustar o produto. Seu sabor de creme, textura suave e versatilidade o tornam uma sobremesa ideal para ser apreciada em diferentes ocasiões e combinações.</p>
        </li>
    </li>
</ul>`

console.log(elementoConteudo);
elementoJS.appendChild(elementoConteudo);