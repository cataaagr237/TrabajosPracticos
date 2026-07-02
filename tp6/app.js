let boton1 = document.querySelector("#boton1")
let boton2 = document.querySelector("#boton2")
let boton3 = document.querySelector("#boton3")
let boton4 = document.querySelector("#boton4")

let p = document.querySelector("#parrafo")
boton1.onclick = function () {
    p.textContent = " hola soy cata"
}

boton2.onclick = function () {
    p.style.backgroundColor = "pink"
}

boton3.onclick = function () {
    p.style.color = "red"
}


boton4.onclick = function () {

    p.style.fontFamily = "Courier New"
}

boton5.onclick= function (){
p.style.fontSize= "30px"
}

boton6.onclick = function(){
    parrafo.textContent= " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia aperiam iure facilis, tempore asperiores ea officiis odio quis magni, suscipit assumenda, exercitationem reprehenderit minima similique accusamus cupiditate ipsa? Voluptates, at."
    parrafo. style. fontSize= "100%"
    parrafo.style.color= "black"
    parrafo.style.backgroundColor= "royalblue"
parrafo.style.fontFamily= "Arial"
}




