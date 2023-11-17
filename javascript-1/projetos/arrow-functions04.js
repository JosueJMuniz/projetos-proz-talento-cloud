/* 
Como usar Arrow Functions em funções anônimas de callback
*/

/* 
Quando não ha parametros colocamos apenas os parenteses vazios
                            ()
Se houver mais de uma instrução é necessário colocar as chaves
                            {}
*/

/* document.addEventListener('click', function(){
    console.log('clicked')
})
 */
document.addEventListener('click', () => console.log('clicked'))