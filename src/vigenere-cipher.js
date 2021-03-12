const CustomError = require("../extensions/custom-error")
class VigenereCipheringMachine {
  constructor(type) {
    this.type = type;
  }
  alphabet(){
    return "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  }
  encrypt(str, key) {
    const iterKey = key.toUpperCase().split("")
    let iterStr = str.toUpperCase().split("")
    if (!key || !str) throw new Error()
    let temp
    let res = ""
    let j = 0
    for (let i = 0; i < iterStr.length; i++) {
      if (this.alphabet().indexOf(iterStr[i]) === -1) {
        temp = this.alphabet().indexOf(iterKey[j % iterKey.length])
        res += iterStr[i]
        j = j - 1
      } else {
        temp = this.alphabet().indexOf(iterKey[j % iterKey.length])
        res +=
          this.alphabet().indexOf(iterStr[i]) + temp === 0
            ? this.alphabet().charAt(0)
            : this.alphabet()[(this.alphabet().indexOf(iterStr[i]) + temp) % this.alphabet().length]
      }
      j += 1
    }
    if(this.type === false) {
      return res.split('').reverse().join('');
    }
    return res
  }
  decrypt(str, key) {
    const iterKey = key.toUpperCase().split("")
    let iterStr = str.toUpperCase().split("")
    if (!key || !str) throw new Error()
    let temp
    let res = ""
    let j = 0
    for (let i = 0; i < iterStr.length; i++) {
      if (this.alphabet().indexOf(iterStr[i]) === -1) {
        temp = this.alphabet().indexOf(iterKey[j % iterKey.length])
        res += iterStr[i]
        j = j - 1
      } else {
        temp = this.alphabet().indexOf(iterKey[j % iterKey.length])
        res +=
          this.alphabet().indexOf(iterStr[i]) + temp === 0
            ? this.alphabet().charAt(0)
            : this.alphabet()[
                (this.alphabet().indexOf(iterStr[i]) + this.alphabet().length - temp) %
                  this.alphabet().length
              ]
      }
      j += 1
    }
    if(this.type === false) {
      return res.split('').reverse().join('');
    }
    return res
  }

}

module.exports = VigenereCipheringMachine
