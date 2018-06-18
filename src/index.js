const botonocultar = document.getElementById("botonocultar");
const botondescubrir = document.getElementById("botondescubrir");

botonocultar.addEventListener("click", event => {
  let userText = document.getElementById("encodeBox").value;
  let results = cipher.encode(encodeBox);
  document.getElementById("encodeBox").innerHTML = results;
});
botondescubrir.addEventListener("click", event => {
  let userOut = document.getElementById("decodeBox").value;
  let results2 = cipher.decode(decodeBox);
  document.getElementById("decodeBox").innerHTML = results2;
});