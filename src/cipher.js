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
        let asciiMin=(textAscii-97+parseInt(caraCifrar))%26+97;
        let resultadoMin = String.fromCharCode(asciiMin);
        solucion+=resultadoMin;
      } else if (textAscii>=32 && textAscii<=64) {
        let asciiCar=(textAscii-32+parseInt(caraCifrar))%33+32;
        let resultadoCar = String.fromCharCode(asciiCar);
        solucion+=resultadoCar;
  /*  } else if (textAscii==165){
         let eneMay= "&Ntilde;";
         solucion+=eneMay;
       } else if (textAscii==164){
          let eneMin="\u00F1";
          solucion+=eneMin;
      /*} else if (textAscii>=129 && textAscii<=165) {
        let asciiCar2=(textAscii-129+parseInt(caraCifrar))%37+129;
        let resultadoCar2 = String.fromCharCode(asciiCar2);
        solucion+=resultadoCar2;
/*} else if (textAscii==165){
   let eñeMay="Ñ";
   solucion+=eñeMay;
 }else if (textAscii==164){
   let eñeMin="ñ";
   solucion+=eñeMin;*/
      /*} else if(textAscii==32){
        let espacioVacio= " ";
        solucion+=espacioVacio;*/
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
        } else if (textAscii>=32 && textAscii<=64) {
          let asciiCar=(textAscii-64-parseInt(caraDescifrar))%33+64;
          let resultadoCar = String.fromCharCode(asciiCar);
          solucion+=resultadoCar;
          }
        }
      return solucion;
    }
};
