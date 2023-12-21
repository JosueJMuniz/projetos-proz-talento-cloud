let keyText = document.querySelector('#key-text')
let codeText = document.querySelector('#code-text')
let quadrado = document.querySelector('#quadrado')
let distanciaDaEsquerda = 0
let distanciaDaDireita = 0


document.addEventListener("keyup", (e) => {
    keyText.innerText = e.key
    codeText.innerText = e.code
    if (e.code == 'ArrowRight') {
        distanciaDaEsquerda += 10
        console.log(distanciaDaEsquerda)

        quadrado.style.left = distanciaDaEsquerda + "px"
    }
})

