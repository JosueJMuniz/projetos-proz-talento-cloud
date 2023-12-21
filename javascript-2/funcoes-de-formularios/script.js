let inputEmail = document.getElementById("email")
let inputIdade = document.getElementById("idade")
let formulario = document.querySelector("form")

inputEmail.addEventListener("focus", (e) => {

    e.target.style.backgroundColor = "lightblue"
    document.getElementsByName("email")[0].placeholder = 'novo texto para email';
    alert("Input em foco")
})

/* Evento focus */
inputIdade.addEventListener("focus", () => {
    alert("Input em foco")
    inputIdade.style.backgroundColor = "lightgreen"
})

/* Evento blur */

inputEmail.addEventListener("blur", (e) => {
    e.target.style.backgroundColor = ""
})

/* Evento change */

inputIdade.addEventListener("change", () => {
    alert("Certeza que deseja alterar seus dados?")
})

/* Evento submit */

formulario.addEventListener("submit", () => {
    alert("Dados enviados com sucesso!")
})