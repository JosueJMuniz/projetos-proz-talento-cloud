let elementoH1 = document.querySelector("h1");

elementoH1.innerText = "Novo título usando JS";

let elementoA = document.querySelector("a");
elementoA.innerText = "Link Adicionado via propriedade innerText";

let elementoUL = document.querySelector("ul");

elementoUL.innerHTML = `
<h4>Lista UL de elementos usando InnerHTML</h4>
<li>1° item adicionado via innerHTML</li>
<li>2° item adicionado via innerHTML</li>
<li>3° item adicionado via innerHTML</li>
`
let elementoOL = document.querySelector("ol");

elementoOL.innerHTML = `
<h4>Lista OL de elementos usando InnerHTML</h4>
<li>
    <a href="https://www.marxists.org/portugues/">
        Arquivo Marxista na internet
    </a>
</li>
<li>
    <a href="https://www.facebook.com/">
        Facebook
    </a>
</li>
<li>
    <a href="https://twitter.com/">
        Twitter
    </a>
</li>


`

