document.getElementById("bienvenida").style.display="block";
  var name=document.getElementById("nombre").value;
  nombre.value="";

function irCifrar(){

  document.getElementById("bienvenida").style.display="none";
  document.getElementById("cifrar1").style.display="block";
  document.getElementById("saludoCifrar").innerHTML= name + " para cifrar tu mensaje debes escribirlo en la siguiente caja de texto"
  textoCifrar.value="";
  caraCifrar.value="";
}
function irDescifrar(){
  document.getElementById("bienvenida").style.display="none";
  document.getElementById("descifrar1").style.display="block";
  document.getElementById("saludoDescifrar").innerHTML= name + " para descifrar tu mensaje debes escribirlo en la siguiente caja de texto"
  textoDescifrar.value="";
  caraDescifrar.value="";
}

function irCifrar2(){
  document.getElementById("cifrar2").style.display="none";
  document.getElementById("descifrar2").style.display="none";
  document.getElementById("cifrar1").style.display="block";
  document.getElementById("saludoCifrar").innerHTML= name + " para cifrar tu mensaje debes escribirlo en la siguiente caja de texto"
  textoCifrar.value="";
  caraCifrar.value="";
}
function irDescifrar2(){
  document.getElementById("cifrar2").style.display="none";
  document.getElementById("descifrar2").style.display="none";
  document.getElementById("descifrar1").style.display="block";
  document.getElementById("saludoDescifrar").innerHTML= name + " para descifrar tu mensaje debes escribirlo en la siguiente caja de texto"
  textoDescifrar.value="";
  caraDescifrar.value="";
}

/*const cifrar1 = function(){
  document.getElementById("bienvenida").style.display="none";
  document.getElementById("cifrar2").style.display="none";
  document.getElementById("descifrar2").style.display="none";
  document.getElementById("cifrar1").style.display="block";

};
const descifrar1 = function(){
  document.getElementById("bienvenida").style.display="none";
  document.getElementById("cifrar2").style.display="none";
  document.getElementById("descifrar2").style.display="none";
  document.getElementById("descifrar1").style.display="block";

};

let botonCifrar=document.getElementById("botonIrCifrar");
botonCifrar.addEventListener("click", cifrar1);
let botonDescifrar=document.getElementById("botonIrDescifrar");
botonDescifrar=addEventListener("click", descifrar1);
let botonCifrar2=document.getElementById("botonIrCifrar2");
botonCifrar2.addEventListener("click", cifrar1);
let botonDescifrar2=document.getElementById("botonIrDescifrar2");
botonDescifrar2=addEventListener("click", descifrar1);
let botonCifrar3=document.getElementById("botonIrCifrar3");
botonCifrar3.addEventListener("click", cifrar1);
let botonDescifrar3=document.getElementById("botonIrDescifrar3");
botonDescifrar3=addEventListener("click", descifrar1);
*/
