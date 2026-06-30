let boton1=document.querySelector ( "#boton1")
let boton2= document.querySelector ("#boton2")
let boton3= document.querySelector ("#boton3")
let boton4= document.querySelector ("#boton4")

let p= document.querySelector ("#parrafo")
boton1.onclick= function() {
p.textContent= " hola soy cata"

}

boton2.onclick= function(){
document.body.style.backgroundColor= "pink"

}

boton3.onclick= function() {
p.style.color= "red"
}


boton4.onclick= function(){

p.style.fontFamily= "Courier New"


}







