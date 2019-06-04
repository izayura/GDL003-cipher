    const string="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    window.cipher = {
    encode: funcionCifrar(string, offset)  {
    document.getElementById("cifrar1").style.display="none";
    document.getElementById("cifrar2").style.display="block";
    var cifrado=document.getElementById("textoCifrar").value;
    //si es un numero va solo el numero, si es una palabra o letra va entre ""
    //asi que si esta entre "", buscar como transformarlo en numero
    var espaciosCifrar=document.getElementById("caraCifrar").value;
    var ascii=(cifrado.charCodeAt()-65+parseInt(espaciosCifrar))%26+65;
    document.getElementById("textoCifrado").innerHTML=ascii.fromCharCode;
    return "textoCifrado";
      }
}
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
