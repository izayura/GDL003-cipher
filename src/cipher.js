window.cipher = {
  encode: (textoCifrar, caraCifrar) => {


  var cifrado=textoCifrar.value;
  var espaciosCifrar=caraCifrar.value;
  var solucion="";

    for (let i=0; i < cifrado.length; i++) {
//esta funcion hace que se elijan todas las letras dentro del bucle for
    var textAscii=cifrado.charCodeAt(i);
/*var ascii=(textAscii+parseInt(espaciosCifrar))%255;
var resultado=String.fromCharCode(ascii);
solucion+=resultado;
}*/
if (textAscii>=65 && textAscii<=90) {
      var ascii=(textAscii-65+parseInt(espaciosCifrar))%26+65;
      var resultado = String.fromCharCode(ascii);
      solucion+=resultado;

     } else if(textAscii==32){
      var espacioVacio= " ";
      solucion+=espacioVacio;
    }
  /*  RESOLVER MINUSUCULAS else if (textAscii>=97 && textAscii<=122) {
       var asciiMin=(textAscii-97+parseInt(espaciosCifrar))%26+97;
       var resultadoMin = String.fromCharCode(asciiMin);
       solucion+=resultadoMin; */
  //  document.getElementById("textoCifrado").innerHTML=solucion;
      }
        return solucion;
    }
  };

  window.decipher = {
  decode: (textoDescifrar, caraDescifrar)=>{

  var descifrado=textoDescifrar.value;
  var espaciosDescifrar=caraDescifrar.value;
  var solucion="";

    for (let i=0; i < descifrado.length; i++) {
//esta funcion hace que se elijan todas las letras dentro del bucle for
    var textAscii=descifrado.charCodeAt(i);
    if (textAscii>=65 && textAscii<=90) {
    var ascii=(textAscii-65-parseInt(espaciosDescifrar))%26+65;
    var resultado = String.fromCharCode(ascii);
    solucion+=resultado;

     } else if(textAscii==32){
       var espacioVacio= " ";
       solucion+=espacioVacio;
     }
  //  document.getElementById("textoDescifrado").innerHTML=solucion;
      }
      return solucion;
}
};
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
