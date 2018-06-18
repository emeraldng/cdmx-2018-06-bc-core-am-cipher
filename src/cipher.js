const offset = 33;
window.cipher = {
  encode: (string) => {
    let result = "";
    let cifrar = result;

    for (let i = 0; i < string.length;i++){
    let charCodigo = string.charCodeAt(i);
      //MAYUS: A
      if (charCodigo >= 65 && charCodigo <= 90){
        cifrar = (((charCodigo - 65) + offset) % 26) + 65;
      }
      ///minus: a
      else if (charCodigo >= 97 && charCodigo <= 122){
        cifrar = (((charCodigo - 97) + offset) % 26) + 97;
      }
      else if (charCodigo === 32){
        cifrar = 32;
      }
      ///Caracteres Especiales

      else if (charCodigo >= 32 && charCodigo <= 64){
        cifrar = (((charCodigo - 32) + offset) % 26) + 32;
      }
      result = result + String.fromCharCode(cifrar);

    }
    return result;


},
  decode: (string) => {
   let result2 = "";
   let descifrar = result2;

   for (let i = 0; i < string.length; i++){
     let charCodigo = string.charCodeAt(i);
     ///MAYUS: A
     if (charCodigo >= 65 && charCodigo <= 90){
       descifrar = (((charCodigo + 65) - offset) % 26) + 65;
     }
     ///minus: a
     else if (charCodigo >= 97 && charCodigo <= 122){
       descifrar = (((charCodigo + 97) + offset) % 26) + 97;
     }
     else if (charCodigo === 32){
       descifrar = 32;
     }
     ///Caracteres Especiales

     else if (charCodigo >= 32 && charCodigo <= 64){
       descifrar = (((charCodigo - 32) + offset) % 26) + 32;
     }
     result2 = result2 + String.fromCharCode(descifrar);

   }
   return result2;

 }

}
      
  
