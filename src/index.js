//Botón para ENCODE (CIFRAR)
const button1 = document.getElementById("buttonEn");
//Botón para DECODE (DESCIFRAR)
const button2 = document.getElementById("buttonDe");



//Función que conecta el evento encode con el botón 
buttonEn.addEventListener("click", event => {
  //Igualando el parametro "string" al valor que ingresó el usuario
  let string = document.getElementById("textBox1").value;

  //Igulando el parametro "offset" al valor númerico que ingresó el usuario.
  let offset = parseInt(document.getElementById("pass1").value);

  //Declarando los paramentros que usará la función "cipher.encode"
  let result2Encode = cipher.encode(offset, string);
  //Pintando el retorno de la función "cipher.encode" en pantalla.
  document.getElementById("encodetxt").innerHTML = result2Encode;
});
//Función que conecta el evento decode con el botón
buttonDe.addEventListener("click", event => {
  //Igualando el parametro "string" al valor que ingresó el usuario.
  let string = document.getElementById("textBox2").value;

  //Igulando el parametro "offset" al valor númerico que ingresó el usuario.
  let offset = parseInt(document.getElementById("pass1").value);

  //Declarando los paramentros que usará la función "cipher.decode"
  let result2Decode = cipher.decode(offset, string);

  //Pintando el retorno de la función "cipher.decode" en pantalla.
  document.getElementById("decodetxt").innerHTML = result2Decode;
  
});


