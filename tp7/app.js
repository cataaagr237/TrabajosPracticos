let p1 = document.querySelector("#p1")
let btn1 = document.querySelector("#btn1")
let edad = document.querySelector("#input1")



btn1.onclick = function () {
    if (edad.value >= 18) {
        p1.textContent = "sos mayor de edad"
    } else {
        p1.textContent = "sos menor de edad"
    }
}

//ejercicio 2//
let nombreUsuario = document.querySelector("#input2")
let parrafo = document.querySelector("#p2")
let btn2 = document.querySelector("#btn2")


btn2.onclick = function () {
    if (nombreUsuario.value == "Marcos" || nombreUsuario.value == "Nahuel") {
        parrafo.textContent = "Bienvenido " + nombreUsuario.value + " ,cómo estas?"
    } else {
        parrafo.textContent = "Bienvenido Usuario"
    }
}

//actividad 3
let nombreUsuario3 = document.querySelector("#input3")
let parrafo3 = document.querySelector("#p3")
let boton3 = document.querySelector("#btn3")



boton3.onclick = function () {
    if ((nombreUsuario3.value == "Nahuel") || (nombreUsuario3.value == "Marcos")) {
        parrafo3.textContent = "Bienvenido " + nombreUsuario3.value + ", ¿como estás?";
    } else {
        parrafo3.textContent = "Bienvenido " + nombreUsuario3.value
    }
}

//actividad 4
let numero4 = document.querySelector("#input4")
let parrafo4 = document.querySelector("#parrafo4");
let boton4 = document.querySelector("#boton4")



boton4.onclick = function () {
    if (numero4.value > 0) {
        parrafo4.textContent = "El número es positivo";
    } else if (numero4.value < 0) {
        parrafo4.textContent = "El número es negativo";
    } else {
        parrafo4.textContent = "El número es cero";
    }
}
//actividad 5
let numero5 = document.querySelector("#input5")
let boton5 = document.querySelector("#boton5")
let parrafo5 = document.querySelector("#parrafo5")



boton5.onclick = function () {
    if ((numero5.value >= 6) && (numero5.value <= 11)) {
        parrafo5.textContent = "Eres un niño";
    } else if ((numero5.value >= 12) && (numero5.value <= 18)) {
        parrafo5.textContent = "Eres adolescente";
    } else if ((numero5.value >= 19) && (numero5.value <= 26)) {
        parrafo5.textContent = " Eres Joven";
    } else if ((numero5.value >= 27) && (numero5.value <= 59)) {
        parrafo5.textContent = "Eres adulto";
    } else if (numero5.value >= 60) {
        parrafo5.textContent = "Eres viejo";
    } else{
     parrafo5.textContent = " Hay problemas";
    }
}

//actividad 6
let diaLaboral = "domingo";
let parrafo6 = document.querySelector('#parrafo6');
let boton6 = document.querySelector("#boton6");
let input6 = document.querySelector("#input6")


boton6.onclick = function () {

    if (diaLaboral == "lunes" || diaLaboral == "martes" || diaLaboral == "miercoles" || diaLaboral == "jueves" || diaLaboral == "viernes") {
        parrafo6.textContent = "Es un día laborable";
    } else if (diaLaboral == "sabado" || diaLaboral == "domingo") {
        parrafo6.textContent = "Es fin de semana";
    }
}

//actividad 7
let contraseña = "secreto";
let parrafo7 = document.querySelector('#parrafo7');
let boton7 = document.querySelector('#boton7');
let input7 = document.querySelector("#input7")



boton7.onclick = function () {
    if (contraseña == "secreto") {
        parrafo7.textContent = "Acceso concedido";
    } else {
        parrafo7.textContent = "Acceso denegado";
    }
}



















