window.cipher = {
  encode: (offset, string) => {
    
    //Declaro un array vacío, donde se vertirá los nuevos códigos ASCII ya con offset rotado.
    let txtInArrayWithAsciiCode = [];
    //Declaré el offset en un var, para poder ver si el valor del input estaba siendo recibido.
    let offsetFunction = offset;
    //Verificando que el offset se está tomando.
    console.log(offsetFunction) 
    
    //Iniciando un loop para recorrer el string dado por el usuario.
    for (let i = 0; i < string.length; i++) {
      //Obtenemos a traves del loop el código ASCII de cada caracter(letra) del string.
      //Lo guardamos en la variable: "code".
      let code = string.charCodeAt(i);
      //Los códigos ASCII obtenidos en var "code".
      //se "pushearan"(enviarán) al array vacío "txtInArrayWithAsciiCode".
      txtInArrayWithAsciiCode.push(code);
      //Verificando que el array si fue rellenado con los valores de "code"
      console.log(txtInArrayWithAsciiCode);
    }
    //Declarando un nuevo array que guardará con el nuevo código ASCII; encriptandolo con el
    //offset seleccionado.
    let newArraywithEncode = txtInArrayWithAsciiCode.map((v) => {
      //Utilizando .map para hacer las opera. matemáticas para desplazar cada valor(v) de cada (i) 
      //del array "txtInArrayWithAsciiCode"
      
      //Si (v) es mayúscula, su ASCII code entra en esta condicional.
      if (v >= 65 && v <= 90) {
        return (((v - 65) + offset) % 26) + 65;
        
        //Si (v) es minúscula, su ASCII code entra en esta condicional.
      } else if (v >= 97 && v <= 122) {
        return (((v - 97) + offset) % 26) + 97;

        //Si (v) es espacio vacío, su ASCII code entra en esta condicional.
      } else {
        return v = 32;
      }
      //Verificando que newArraywithEncode ha sido rellenado con los nuevos valores ASCII rotados.
      console.log(newArraywithEncode);

    })
     
     //Usando .apply aplico "String.fromCharCode" pero a cada elemento de nuevo array,
     //para transformar cada código en una letra.
     //Retorno el nuevo string ya con las posiciones rotadas.
    return String.fromCharCode.apply(String, newArraywithEncode);
    
    //Apliqué .join("") pero me retornó un strings de códigos juntos "65786989"
    //return newArraywithEncode.join("");
    
    

  },
  decode: (offset, string) => {
    //Declarando un array que contendrá los códigos ASCII
    let txTCifradoInArray2 = [];
    
    //Iniciando un loop para obtener el código ASCII de cada letra del string del usuario.
    for (let i=0; i<string.length; i++) {
      //Guardando los código ASCII en la var "code2"
      let code2 = string.charCodeAt(i);
      //enviando los código guardados en "code2" a txTCifradoInArray.
      txTCifradoInArray2.push(code2);
    }
    //Declarando un nuevo array que contendrá los nuevos valores de cada código
    //usando .map para realizar las ope. matemáticas de cada (v) de cada (i) del array
    let newArraywithDecode = txTCifradoInArray2.map((v) => {

      //Si el valor (v) corresponde a una mayúscula.
      if (v >= 65 && v <= 90) {
        return (((v + 65) - offset) % 26) + 65;
      }
      //Si el valor (v) corresponde a una minúscula.
      else if (v >= 97 && v <= 122) {
        return (((v + 97) + offset) % 26) + 97;

      //Si el valor (v) corresponde a espacio vacío.
      }else{
        
        return v=32;
      }
      
      
    })
     //Retorno el nuevo string ya con las posiciones rotadas.
    return String.fromCharCode.apply(String, newArraywithDecode);
  }

}



