
function cajasParaDepositarDatos() {
  document.getElementById('decipher').value = "";
  document.getElemntbyId('cipher').value = "";
  document.getElementById("result").value = "";
  document.getElementById("offset").value = 1;
  }

  function cipher() {
      let decipher =
      document.getElementById('decipher').value.toLocaleUpperCase() || "";
      let cipher = document.getElementById('cipher');
      let offset = document.getElementById('offset');
      let cipherArray = '';
      [...decipher].forEach(char => {
      //console.log(char.charCodeAt())
      if (char.charCodeAt() === 32) {
      cipherArray.push(32);
      } else {
      charNumber = char.charCodeAt() - 65;
      //console.log(charNumber)
      cipherChar = (charNumber + parseInt(offset.value)) % 26;
      //console.log(cipherChar)
      cipherArray.push(cipherChar + 65);
      }
      })
      document.getElementById("result").value =
      String.fromCharCode(...cipherArray);
      //console.log(String.fromCharCode(...cipherArray))
      }
      
      
      function decipher() {
      let decipher = document.getElementById('decipher');
      let cipher =
      document.getElementById('cipher').value.toLocaleUpperCase();
      let offset = document.getElementById('offset');
      let cipherArray = new Array();
      [...encrypted].forEach(char => {
      //console.log(char.charCodeAt())
      if (char.charCodeAt() === 32) {
      cipherArray.push(32);
      } else {
      charNumber = char.charCodeAt() - 65;
      //console.log(charNumber)
      cipherChar = (charNumber - parseInt(offset.value));
      //console.log(cipherChar)
      if (cipherChar > 25 || cipherChar < 0) cipherChar =
      cipherChar + 26
      cipherChar = cipherChar % 26
      cipherArray.push(cipherChar + 65);
      }
      })
        
      document.getElementById("result").value =
      String.fromCharCode(...cipherArray);
      //console.log(String.fromCharCode(...cipherArray))
      }
      
  