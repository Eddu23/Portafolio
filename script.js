const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");
const lis = document.querySelectorAll("#liCerrar");

abrir.addEventListener("click", () => {
    nav.classList.add("visible");
})

cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");
})

lis.forEach(li => {
    li.addEventListener("click", () => {
        nav.classList.remove("visible");
    });
});

window.addEventListener("scroll", () => {
    if (nav.classList.contains("visible")) {
        nav.classList.remove("visible");
    }
});

function copiarTexto() {
    var elemento = document.getElementById("textoParaCopiar");
    var areaTexto = document.createElement("textarea");
    areaTexto.value = elemento.textContent;
    document.body.appendChild(areaTexto);
    areaTexto.select();
    document.execCommand("copy");
    document.body.removeChild(areaTexto);
}
