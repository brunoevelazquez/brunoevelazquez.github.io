

let home = document.querySelector("#home");
let inicio = document.querySelector("#inicio");
home.addEventListener("click", scrollInicio, false);
function scrollInicio(e) {
  inicio.scrollIntoView({ behavior: "smooth" });
}

let sobreMi = document.querySelector("#sobreMi");
let medio = document.querySelector("#medio");
sobreMi.addEventListener("click", scrollmedio, false);
function scrollmedio(e) {
  medio.scrollIntoView({ behavior: "smooth" });
  
}

let contacto = document.querySelector("#contacto");
let final = document.querySelector("#final");
contacto.addEventListener("click", scrollfinal, false);
function scrollfinal(e) {
final.scrollIntoView({ behavior: "smooth" });
  
}


let github = document.getElementById("github");
const configuracion_ventana =
  "menubar=yes,location=yes,resizable=yes,scrollbars=yes,status=yes";
github.addEventListener("click", abrirGit);
function abrirGit() {
  github = window.open(
    "https://github.com/brunoevelazquez",
    "github.com",
    configuracion_ventana
  );
}


let correo = document.getElementById("correo");
correo.addEventListener("click", abrirCorreo);
function abrirCorreo() {
  correo = window.open(
    "https://outlook.live.com/mail/0/inbox",
    "https://outlook.live.com/",
    configuracion_ventana
  );
}






