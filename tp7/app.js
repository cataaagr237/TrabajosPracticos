let  p1 = document.querySelector ("#p1")
let btn1 = document.querySelector ("#btn1")
let edad= 18

btn1.onclick=function (){
    if (edad>=18) {
        p1.textContent= "sos mayor de edad"
    } else {
        p1.textContent="sos menor de edad"
    }
}

//ejercicio 2//
let nombreUsuario= "Nahuel"
let parrafo= document.querySelector ("#p2")
let btn2 = document.querySelector("#btn2")


btn2.onclick=function (){
    if (nombreUsuario == "Marcos" || nombreUsuario == "Nahuel") {
        parrafo.textContent= "Bienvenido " + nombreUsuario+ " ,cómo estas?"
    } else {
        parrafo.textContent="Bienvenido Usuario"
    }
}

//actividad 3
let nombreUsuario3 = "Marcos";
let parrafo3 = document.querySelector("#parrafo3")
let boton3 = document.querySelector("#boton3")

boton3.onclick = function () {
if (nombreUsuario3 == "Nahuel" || nombreUsuario3 == "Marcos") {
    parrafo3.textContent = "Bienvenido " + nombreUsuario3 + ", ¿cómo estás?";
} else {
    parrafo3.textContent = "Bienvenido " + nombreUsuario3;
}
}

//actividad 4
let numero4 = 0;
let parrafo4 = document.querySelector("#parrafo4");
let boton4 = document.querySelector("#boton4")

boton4.onclick = function (){
if (numero4 > 0) {
    parrafo4.textContent = "El número es positivo";
} else if (numero4 < 0) {
    parrafo4.textContent = "El número es negativo";
} else {
    parrafo4.textContent = "El número es cero";
}
}
//actividad 5
let numero5 = 6;
let boton5 = document.querySelector("#boton5")
let parrafo5 = document.querySelector("#parrafo5")

boton5.onclick = function (){
    if (numero5 >= 6 && numero5 <= 11)  {
        parrafo5.textContent = "Eres un niño";
    } else if (numero5 >= 12 && numero5 <= 18) {
        parrafo5.textContent = "Eres adolescente";
    }else if (numero5 >= 19 && numero5 <= 26)  {
        parrafo5.textContent = " Eres Joven";
    } else if (numero5 >= 27 && numero5 <= 59) {
        parrafo5.textContent = "Eres adulto";
    }else if(numero5 >=60){
    parrafo5.textContent = "Eres viejo";
    }else parrafo5.textContent = " Hay problemas";

}

//actividad 6
let diaLaboral = "domingo";
let parrafo6 = document.querySelector('#parrafo6');
let boton6 = document.querySelector("#boton6");

boton6.onclick = function (){

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

boton7.onclick = function () {
    if (contraseña == "secreto") {
        parrafo7.textContent = "Acceso concedido";
    } else {
        parrafo7.textContent = "Acceso denegado";
    }
}



















