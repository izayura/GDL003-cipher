document.getElementById("bienvenida").style.display="block";
  document.getElementById("nombre").value="";
  var name=document.getElementById("nombre").value;
  var textoCifrar=document.getElementById("textoCifrar");
  var caraCifrar=document.getElementById("caraCifrar");
  var textoDescifrar=document.getElementById("textoDescifrar");
  var caraDescifrar=document.getElementById("caraDescifrar");
  var cifrar=document.getElementById("cifrar");
  var descifrar=document.getElementById("descifrar");

  cifrar.addEventListener("click", ()=>{
  document.getElementById("cifrar1").style.display="none";
  document.getElementById("cifrar2").style.display="block";
  var cifrado=textoCifrar.value;
  var espaciosCifrar=caraCifrar.value;
  var resultadoCifrado=window.cipher.encode(cifrado, espaciosCifrar);
  document.getElementById("textoCifrado").innerHTML=resultadoCifrado;
  } );

  descifrar.addEventListener("click", ()=>{
  document.getElementById("descifrar1").style.display="none";
  document.getElementById("descifrar2").style.display="block";
  var descifrado=textoDescifrar.value;
  var espaciosDescifrar=caraDescifrar.value;
  var resultadoDescifrado=window.cipher.decode(descifrado, espaciosDescifrar);
  document.getElementById("textoDescifrado").innerHTML=resultadoDescifrado;
  } );

  const cifrar1 =()=>{
    document.getElementById("bienvenida").style.display="none";
    document.getElementById("cifrar2").style.display="none";
    document.getElementById("descifrar2").style.display="none";
    document.getElementById("cifrar1").style.display="block";
    document.getElementById("saludoCifrar").innerHTML= name + " para cifrar tu mensaje debes escribirlo en la siguiente caja de texto";
    textoCifrar.value="";
    caraCifrar.value="";

  };
  const descifrar1 = function(){
    document.getElementById("bienvenida").style.display="none";
    document.getElementById("cifrar2").style.display="none";
    document.getElementById("descifrar2").style.display="none";
    document.getElementById("descifrar1").style.display="block";
    document.getElementById("saludoDescifrar").innerHTML= name + " para descifrar tu mensaje debes escribirlo en la siguiente caja de texto";
    textoDescifrar.value="";
    caraDescifrar.value="";

  };

  let botonCifrar=document.getElementById("botonIrCifrar");
  botonCifrar.addEventListener("click", cifrar1);

  let botonDescifrar=document.getElementById("botonIrDescifrar");
  botonDescifrar.addEventListener("click", descifrar1);

  let botonCifrar2=document.getElementById("botonIrCifrar2");
  botonCifrar2.addEventListener("click", cifrar1);

  let botonDescifrar2=document.getElementById("botonIrDescifrar2");
  botonDescifrar2.addEventListener("click", descifrar1);

  let botonCifrar3=document.getElementById("botonIrCifrar3");
  botonCifrar3.addEventListener("click", cifrar1);

  let botonDescifrar3=document.getElementById("botonIrDescifrar3");
  botonDescifrar3.addEventListener("click", descifrar1);


/*  var irCifrar = () => {
 usar esta forma para evitar el uso de function
  const/let irCifrar = () => {

  }

  document.getElementById("bienvenida").style.display="none";
  document.getElementById("cifrar1").style.display="block";
  document.getElementById("saludoCifrar").innerHTML= name + " para cifrar tu mensaje debes escribirlo en la siguiente caja de texto";
  textoCifrar.value="";
  caraCifrar.value="";
};
  var irDescifrar=()=>{
  document.getElementById("bienvenida").style.display="none";
  document.getElementById("descifrar1").style.display="block";
  document.getElementById("saludoDescifrar").innerHTML= name + " para descifrar tu mensaje debes escribirlo en la siguiente caja de texto";
  textoDescifrar.value="";
  caraDescifrar.value="";
};

  var irCifrar2=()=>{
  document.getElementById("cifrar2").style.display="none";
  document.getElementById("descifrar2").style.display="none";
  document.getElementById("cifrar1").style.display="block";
  document.getElementById("saludoCifrar").innerHTML= name + " para cifrar tu mensaje debes escribirlo en la siguiente caja de texto";
  textoCifrar.value="";
  caraCifrar.value="";
};
  var irDescifrar2=()=>{
  document.getElementById("cifrar2").style.display="none";
  document.getElementById("descifrar2").style.display="none";
  document.getElementById("descifrar1").style.display="block";
  document.getElementById("saludoDescifrar").innerHTML= name + " para descifrar tu mensaje debes escribirlo en la siguiente caja de texto";
  textoDescifrar.value="";
  caraDescifrar.value="";
}; */
