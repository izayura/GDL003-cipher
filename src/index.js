  document.getElementById("bienvenida").style.display="block";
  nombre.value="";
  let cifrar=document.getElementById("cifrar");
  let descifrar=document.getElementById("descifrar");

  cifrar.addEventListener("click", ()=>{
  document.getElementById("cifrar1").style.display="none";
  document.getElementById("cifrar2").style.display="block";
  let textoCifrar=document.getElementById("textoCifrar").value;
  let caraCifrar=document.getElementById("caraCifrar").value;
  let resultadoCifrado=window.cipher.encode(caraCifrar, textoCifrar);
  document.getElementById("textoCifrado").innerHTML=resultadoCifrado;
  } );

  descifrar.addEventListener("click", ()=>{
  document.getElementById("descifrar1").style.display="none";
  document.getElementById("descifrar2").style.display="block";
  let textoDescifrar=document.getElementById("textoDescifrar").value;
  let caraDescifrar=document.getElementById("caraDescifrar").value;
  let resultadoDescifrado=window.cipher.decode(caraDescifrar, textoDescifrar);
  document.getElementById("textoDescifrado").innerHTML=resultadoDescifrado;
  } );

  const cifrar1 =()=>{
    document.getElementById("bienvenida").style.display="none";
    document.getElementById("cifrar2").style.display="none";
    document.getElementById("descifrar2").style.display="none";
    document.getElementById("cifrar1").style.display="block";
    let name=document.getElementById("nombre").value;
    document.getElementById("saludoCifrar").innerHTML= name + " para cifrar tu mensaje debes escribirlo en la siguiente caja de texto";
    textoCifrar.value="";
    caraCifrar.value="";
  };

  const descifrar1 =()=>{
    document.getElementById("bienvenida").style.display="none";
    document.getElementById("cifrar2").style.display="none";
    document.getElementById("descifrar2").style.display="none";
    document.getElementById("descifrar1").style.display="block";
    let name=document.getElementById("nombre").value;
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
