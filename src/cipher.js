    let string="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  function funcionCifrar()  {
    var cifrado=document.getElementById("textoCifrar").value;

    var espaciosCifrar=document.getElementById("caraCifrar").value;
  document.getElementById("textoCifrado").innerHTML=(cifrado.charCodeAt()-65+parseInt(espaciosCifrar))%26+65;
  }
// ESTO ESTABA ANTES EN EL ARCHIVO window.cipher = {
// }; //
  // Agregar el codigo JS para la formula que realice el cifrado//
  //con espacios a recorrer y hacia donde se aplicaria la funcion necesaria//
