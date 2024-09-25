// Caesar Cipher Encryption Function
function encrypt(str, key) {
  let newStr = [];

  for (let i = 0; i < str.length; i++) {
    let ascii = str.charCodeAt(i);

    // For uppercase letters
    if (ascii >= 65 && ascii <= 90) {
      let newAscii = ((ascii - 65 + key) % 26) + 65;
      newStr.push(String.fromCharCode(newAscii));
    }
    // For lowercase letters
    else if (ascii >= 97 && ascii <= 122) {
      let newAscii = ((ascii - 97 + key) % 26) + 97;
      newStr.push(String.fromCharCode(newAscii));
    }
    else {
      // If it's not a letter, leave it unchanged
      newStr.push(str[i]);
    }
  }

  return newStr.join("");
}




// Caesar Cipher Decryption Function
function decrypt(str, key) {
  let newStr = [];

  for (let i = 0; i < str.length; i++) {
    let ascii = str.charCodeAt(i);

    // For uppercase letters
    if (ascii >= 65 && ascii <= 90) {
      let newAscii = ((ascii - 65 - key + 26) % 26) + 65; // Add 26 to handle negative values
      newStr.push(String.fromCharCode(newAscii));
    }
    // For lowercase letters
    else if (ascii >= 97 && ascii <= 122) {
      let newAscii = ((ascii - 97 - key + 26) % 26) + 97; // Add 26 to handle negative values
      newStr.push(String.fromCharCode(newAscii));
    }
    else {
      // If it's not a letter, leave it unchanged
      newStr.push(str[i]);
    }
  }

  return newStr.join("");
}






// Event listeners 
document.getElementById('encryptBtn').addEventListener('click', function () {
  let text = document.getElementById('text').value;
  let shift = parseInt(document.getElementById('shift').value);
  let result = encrypt(text, shift);
  document.getElementById('result').value = result;
});

document.getElementById('decryptBtn').addEventListener('click', function () {
  let text = document.getElementById('text').value;
  let shift = parseInt(document.getElementById('shift').value);
  let result = decrypt(text, shift);
  document.getElementById('result').value = result;
});
