const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");
const lis = document.querySelectorAll("#liCerrar");

// -----------------------------------------formulario validaciones 

const formulario = document.getElementById("formulario");
const inputs = document.querySelectorAll("#formulario input");
const textAreas = document.querySelectorAll("#formulario textarea");
const expresiones = {
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,50}$/, //Letras y espacios. Puede llevar tilde
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
}

const campos = {
    name: false,
    email: false
}

const validarFormulario = (e) => {
    switch (e.target.name) {
        case "name":
            validarCampo(expresiones.nombre, e.target, 'name');
            break;

        case "email":
            validarCampo(expresiones.correo, e.target, 'email');
            break;

        case "message":
            console.log('hola desde message');
            break;
    }
}

const validarCampo = (expresion, input, campo) => {
    if (expresion.test(input.value)) {
        document.getElementById(`grupo_${campo}`).classList.remove('formulario_grupo-incorrecto');
        document.getElementById(`grupo_${campo}`).classList.add('formulario_grupo-correcto');
        document.querySelector(`#grupo_${campo} i`).classList.remove('fa-circle-xmark');
        document.querySelector(`#grupo_${campo} i`).classList.add('fa-circle-check');
        document.querySelector(`#grupo_${campo} .formilario_input-estado`).classList.remove('formilario_input-estado-activo');
        campos[campo] = true;
    } else {
        document.getElementById(`grupo_${campo}`).classList.add('formulario_grupo-incorrecto');
        document.getElementById(`grupo_${campo}`).classList.remove('formulario_grupo-correcto');
        document.querySelector(`#grupo_${campo} i`).classList.add('fa-circle-xmark');
        document.querySelector(`#grupo_${campo} i`).classList.remove('fa-circle-check');
        document.querySelector(`#grupo_${campo} .formilario_input-estado`).classList.add('formilario_input-estado-activo');
        campos[campo] = false;
    }
}



inputs.forEach((input) => {
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);
})

textAreas.forEach((textarea) => {
    textarea.addEventListener('keyup', validarFormulario);
    textarea.addEventListener('blur', validarFormulario);
})

formulario.addEventListener('submit', (e) => {

    if(campos.name && campos.email) {
        formulario.reset();
        document.getElementById('formulario_mensaje-exito').classList.add('formulario_mensaje-exito-activo');
        setTimeout(() => {
            document.getElementById('formulario_mensaje-exito').classList.remove('formulario_mensaje-exito-activo');
        }, 5000)
     } else {
        e.preventDefault();
        document.getElementById('formulario_mensaje').classList.add('formulario_mensaje-activo');
        setTimeout(() => {
            document.getElementById('formulario_mensaje').classList.remove('formulario_mensaje-activo');
        }, 5000)
     }
});

// -----------------------------------------copiar texto
const copyText = document.getElementById("texto_copy");
const buttonCopy = document.getElementById("copy");

buttonCopy.addEventListener("click", () => {
    copyText.classList.add("texto_copy-active")
    setTimeout(() => {
        copyText.classList.remove("texto_copy-active")
    }, 5000)
})



// -----------------------------------------Navbar funciones 
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
