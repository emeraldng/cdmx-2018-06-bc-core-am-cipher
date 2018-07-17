// const strFromUser = document.getElementById("textBox1").value;
// const strFromUser2 = document.getElementById("textBox2").value;
// let offset = parseInt(document.getElementById("pass1").value);
window.cipher = {
  encode: (offset, string) => {
    let txtInArrayWithAsciiCode = [];
    let txTCifradoInArray = [];
    let result2Encode = "";
    let encodTxt = result2Encode;
    
    for (let i = 0; i < string.length; i++) {
      var code = string.charCodeAt(i);
      txtInArrayWithAsciiCode.push(code);
    }
    let newArraywithEncode = txtInArrayWithAsciiCode.map((v, i, a) => {
      if (v >= 65 && v <= 90) {
        return (((v - 65) + offset) % 26) + 65;
      } else if (v >= 97 && v <= 122) {
        return (((v - 97) + offset) % 26) + 97;
      } else {
        return v = 32;
      }
      result2Encode = String.fromCharCode.apply(String, newArraywithEncode);
      
    })
    return result2Encode;
    

  },
  decode: (offset, string) => {
    let txtInArrayWithAsciiCode2 = [];
    let txTCifradoInArray2 = [];
    let result2Decode = "";
    let decodTxt = result2Decode;

    for (let i=0; i<string.length; i++) {
      var code2 = string.charCodeAt(i);
      txTCifradoInArray2.push(code2);
    }
    let newArraywithDecode = txTCifradoInArray2.map((v,i,a) => {
      if (v >= 65 && v <= 90) {
        return (((v + 65) - offset) % 26) + 65;
      }
      else if (v >= 97 && v <= 122) {
        return (((v + 97) + offset) % 26) + 97;
      }else{
        return v=32;
      }
      result2Decode = String.fromCharCode.apply(String, newArraywithDecode);
      
    })
    return result2Decode;
  }

}



