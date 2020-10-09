import CryptoJS from 'crypto-js'

const KEY = CryptoJS.enc.Utf8.parse('adghdsaherhregre');
const IV = CryptoJS.enc.Utf8.parse('sdahdgdsfs');
export default {
  encrypt (word, keyStr, str) {
    let key = KEY
    let iv = IV

    if (str) {
      key = CryptoJS.enc.Utf8.parse(key)
      iv = CryptoJS.enc.Utf8.parse(str)
    }

    let src = CryptoJS.enc.Utf8.parse(word)
    let encrypted = CryptoJS.AES.encrypt(src, key, {iv: iv, mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7})
    let hex = encrypted.ciphertext.toString().toUpperCase()
  }
}
