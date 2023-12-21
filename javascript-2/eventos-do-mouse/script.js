let button = document.querySelector('button')
let span = document.querySelector('span')
let section = document.querySelector('section')

function mostrarSpan() {
    span.style.opacity = "100"
    span.style.transform = "23"
}


button.addEventListener('mouseover', mostrarSpan)

function escondeSpan() {
    span.style.opacity = "0"

}
button.addEventListener('mouseout', escondeSpan)

/* Evento Click 
    junção de dois eventos do mouse, o "mousedown" ativado quando
    o botão esquerdo do mouse é apertado e o "mouseout" ativado
    quando o botão é solto
*/

function fazerUmClick() {
    section.innerText = 'Fez um clique simples'
    section.style.color = "lightgreen"
    section.style.fontSize = "23px"

}

button.addEventListener('click', fazerUmClick)

/* Evento double click ou dblclick */

function fazerDoisCliques() {
    section.innerText = "Fez um duplo clique"
}

button.addEventListener('dblclick', fazerDoisCliques)