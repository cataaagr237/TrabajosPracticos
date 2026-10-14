let Ej1 = document.querySelector('#Ej1')
let botonEj1 = document.querySelector('#botonEj1')

let edad = 18
botonEj1.onclick = function(){

    if (edad >= 16)  {
      Ej1.textContent = 'Sos mayor de edad'      
    } else {
      Ej1.textContent = 'Sos menor de edad'  
    }
}
