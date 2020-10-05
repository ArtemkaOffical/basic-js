const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(bool) {
    if (bool === true || bool === undefined) this.reverse = true
    else this.reverse = false
  }
  calculateOutput(message, key, method) {
    if (!message || !key) throw new Error();
    let output = '';
    let keyLetterIterator = 0;
    for (let i = 0; i < message.length; i++) 
    {
      const stringLetter = message[i].toUpperCase();
      if (stringLetter >= 'A' && stringLetter <= 'Z')
      {
        const keyLetter = i < key.length ? key[keyLetterIterator].toUpperCase() : key[keyLetterIterator % key.length].toUpperCase();
        keyLetterIterator++;
        if(method =='encrypt')
        {
          output += String.fromCharCode((stringLetter.charCodeAt(0) + keyLetter.charCodeAt(0)) % 26 + 65) 
        }
        else{output += String.fromCharCode((26 + stringLetter.charCodeAt(0) - keyLetter.charCodeAt(0)) % 26 + 65)}
      }
      else output += message[i]
    }
    return this.reverse ? output : output.split('').reverse().join('')
  }
  encrypt(message, key) {
    return this.calculateOutput(message, key, 'encrypt')
  }    
  decrypt(encryptedMessage, key) {
    return this.calculateOutput(encryptedMessage, key, 'decrypt')
  }
}

module.exports = VigenereCipheringMachine;
