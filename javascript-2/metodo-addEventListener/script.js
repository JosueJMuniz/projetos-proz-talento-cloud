let numero = document.querySelector('h1')
let botao1 = document.getElementById('btn-adicao')

/* Variável contadora */
let contagem = 0

/* Função que aumenta o valor da var contagem em 1, e exibe 
    o seu valor como texto do elemento 'numero', usando innerText
*/

/* Usando a refatoração como alternativa a organização 
   do código declarando a função como anonima
*/

botao1.addEventListener('click', function(){
    contagem += 1
    numero.innerText = contagem
})

/* function adicionarUm(){
    contagem += 1
    numero.innerText = contagem
}

botao1.addEventListener('click', adicionarUm) */



/* Usando a refatoração como alternativa a organização 
   do código declarando a função como anonima
*/

let botao2 = document.getElementById('btn-subtrai')

botao2.addEventListener('click', function(){
    contagem -= 1
    numero.innerText = contagem
})

/* function removeUm(){
    contagem -= 1
    numero.innerText = contagem
}

botao2.addEventListener('click', removeUm)  */



