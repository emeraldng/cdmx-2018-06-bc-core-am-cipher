
 //Guardando los datos del usuario en una variable. 
 function sss(){ 
  //para obtener el texto 
  let mensaje = document.getElementById("txt1").value; 
  document.getElementById("aaa").innerHTML=("La palabra encriptada es"+ mensaje); 
  //para obtener el nº de posiciones a mover 
  let posicion = document.getElementById("psw1").value; 
  document.getElementById("bbb").innerHTML=("La palabra encriptada es" + posicion); 
  } 
  //función para encriptar 
  const encriptar = (string, offset) => { 
  let resultado = ""; 
  let encriptar = resultado; 
  //estableciendo los límites para las mayúsculas y minusculas. 
  for (let i=0; i<string.lenght; i++){ 
  //para mayusculas 
  if (string.charCodeAt(i)>=65 && string.charCodeAt(i)<=90) { 
  code=(((string.charCodeAt(i)-65)+offset)%26)+65; 
  } 
  //para minusculas 
  else if (string.charCodeAt(i)>=97 && string.charCodeAt(i)<=122){ 
  code= (((string.charCodeAt(i)-97)+offset)%26)+97; 
  } 
  else if (string.charCodeAt(i)===32) 
  code = 32; 
  } 
  return resultado; 
  } 
  //función para imprimir el resultado en un lugar en especifico 
  const joven =() => { 
  let jovencillo = document.getElementById("txt1").value; 
  document.getElementById("cajilla").innerHTML=(encriptar(jovencillo, 15)); 
  }
  
  