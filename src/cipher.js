    //window.cipher = {

      //si es un numero va solo el numero, si es una palabra o letra va entre ""
    //asi que si esta entre "", buscar como transformarlo en numero
function funcionCifrar() {
  document.getElementById("cifrar1").style.display="none";
  document.getElementById("cifrar2").style.display="block";
  var cifrado=document.getElementById("textoCifrar").value;
  var espaciosCifrar=document.getElementById("caraCifrar").value;
  var espacio="";

    for (i=0; i < cifrado.length; i++) {
//esta funcion hace que se elijan todas las letras dentro del bucle for
    var textAscii=cifrado.charCodeAt(i);
    if (textAscii>=65 && textAscii<=90) {
    var ascii=(textAscii-65+parseInt(espaciosCifrar))%26+65;
    resultado = String.fromCharCode(ascii);
    espacio+=ascii;
     }
    document.getElementById("textoCifrado").innerHTML=espacio;
      }
    }

function funcionDescifrar(){
  document.getElementById("descifrar1").style.display="none";
  document.getElementById("descifrar2").style.display="block";
}
/*<div class="contenedor">
<input type="text" id="campoEntrada" class="entrada"/>
    <div id="pantalla" class="salida" ></div>
    <input type="button" value="Codificar" class="boton" onclick="codificar()" />
    <input type="button" value="Decodificar" class="boton" onclick="decodificar()" />
</div>*/

// ESTO ESTABA ANTES EN EL ARCHIVO window.cipher = {
// encode: funcionCifrar(string, offset)  {
  //document.getElementById("cifrar1").style.display="none";
  //document.getElementById("cifrar2").style.display="block";
  //var cifrado=document.getElementById("textoCifrar").value;
//si es un numero va solo el numero, si es una palabra o letra va entre ""
//asi que si esta entre "", buscar como transformarlo en numero
//  var espaciosCifrar=document.getElementById("caraCifrar").value;
//var ascii=(cifrado.charCodeAt()-65+parseInt(espaciosCifrar))%26+65;
//document.getElementById("textoCifrado").innerHTML=ascii.fromCharCode;
//return "textoCifrado";
//},

//decode: funcionDescifrar(string, offset){
//return "textoDescifrado";

// };

  // Agregar el codigo JS para la formula que realice el cifrado//
  //con espacios a recorrer y hacia donde se aplicaria la funcion necesaria//
