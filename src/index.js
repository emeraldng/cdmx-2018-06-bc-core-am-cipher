const button1 = document.getElementById("buttonEn");
const button2 = document.getElementById("buttonDe");
//let string = document.getElementById("textBox1").value;
let offset = parseInt(document.getElementById("pass1").value);

buttonEn.addEventListener("click", event => {
  let string = document.getElementById("textBox1").value;
  let offset = parseInt(document.getElementById("pass1").value);
  let result2Encode = cipher.encode(offset, string);
  document.getElementById("encodetxt").innerHTML = result2Encode;
});
button2.addEventListener("click", event => {
  let string = document.getElementById("textBox2").value;
  let offset = parseInt(document.getElementById("pass1").value);
  let result2Decode = cipher.decode(offset, string);
  document.getElementById("decodetxt").innerHTML = result2Decode;
  
});


