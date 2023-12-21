let div = document.querySelector('div')
 
let incluiClasse = div.classList.contains('borda-azul')
console.log(incluiClasse)



/* Adicionando Classes */

div.classList.add('texto-novo')
let incluiClasse1 = div.classList.contains('texto-novo')
console.log(incluiClasse1)

/* Removendo classes - Função .remove() */

div.classList.remove('borda-azul')

/* Alternando classes Função .toggle() */

div.classList.toggle('borda-azul')

/* OBS: a alternância com o método toggle() verifica se o elemento possui a
    classe, se não, ele a adiciona, porém se o elemento já tiver a classe o 
    contrário acontece pois o se houver um remove() o toggle alterna e retira 
    a classe.
*/
div.classList.toggle('borda-azul')