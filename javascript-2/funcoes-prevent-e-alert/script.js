let linkProz = document.getElementById("link-proz")
let btnSubmit = document.querySelector("button[type=submit]")

linkProz.addEventListener("click", (e) => {
    e.preventDefault()
    alert("Não foi possivel acessar o link")
})

btnSubmit.addEventListener("click", (e) => {
    alert("Não foi possivel acessar o link")
    e.preventDefault()

})
