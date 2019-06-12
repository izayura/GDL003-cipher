window.cipher = {
encode: (caraCifrar, textoCifrar)=>{
  let solucion="";
    for (let i=0; i < textoCifrar.length; i++) {
//esta funcion hace que se elijan todas las letras dentro del bucle for
      let textAscii=textoCifrar.charCodeAt(i);
/*var ascii=(textAscii+parseInt(espaciosCifrar))%255;
var resultado=String.fromCharCode(ascii);
solucion+=resultado;
}*/
    if (textAscii>=65 && textAscii<=90) {
        let ascii=(textAscii-65+parseInt(caraCifrar))%26+65;
        let resultado = String.fromCharCode(ascii);
        solucion+=resultado;
      } else if (textAscii>=97 && textAscii<=122) {
        var asciiMin=(textAscii-97+parseInt(caraCifrar))%26+97;
        var resultadoMin = String.fromCharCode(asciiMin);
        solucion+=resultadoMin;
/*} else if (textAscii==165){
   let eñeMay="Ñ";
   solucion+=eñeMay;
 }else if (textAscii==164){
   let eñeMin="ñ";
   solucion+=eñeMin;*/
      } else if(textAscii==32){
        let espacioVacio= " ";
        solucion+=espacioVacio;
        }
      }
      return solucion;
  },

  decode: (caraDescifrar, textoDescifrar)=>{
    let solucion="";
      for (let i=0; i < textoDescifrar.length; i++) {
//esta funcion hace que se elijan todas las letras dentro del bucle for
      let textAscii=textoDescifrar.charCodeAt(i);
      if (textAscii>=65 && textAscii<=90) {
        let ascii=(textAscii-90-parseInt(caraDescifrar))%26+90;
        let resultado = String.fromCharCode(ascii);
        solucion+=resultado;
        } else if (textAscii>=97 && textAscii<=122) {
          var asciiMin=(textAscii-122-parseInt(caraDescifrar))%26+122;
          var resultadoMin = String.fromCharCode(asciiMin);
          solucion+=resultadoMin;
        } else if(textAscii==32){
          let espacioVacio= " ";
          solucion+=espacioVacio;
          }
      }
      return solucion;
    }
};

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
