const linkPerfil = document.getElementById("link-perfil");
const navPerfil = document.getElementById("nav-perfil");

linkPerfil.addEventListener("mouseover", () => {
  navPerfil.style.display = "block"
})

const linkPerfilDados = document.getElementById("link-perfil-dados");

document.addEventListener("keyup", (e) => {
  if (navPerfil.style.display == "block") {

    if (e.code == "Digit1") {
      linkPerfilDados.click();
    }
    if (e.code == "Digit1") {
      console.log("Abre o menu de perfil");
      navPerfil.style.display = "block"
    }

  }
})

