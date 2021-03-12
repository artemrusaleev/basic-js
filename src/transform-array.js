const CustomError = require("../extensions/custom-error")

module.exports = function transform(arr) {
  let result = []
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == "--discard-next") {
      i++
    } else if (arr[i] == "--discard-prev" && arr[i - 2] == "--discard-next") {
      //do nothing
    } else if (arr[i] == "--discard-prev") {
      result.pop()
    } else if (arr[i] == "--double-next") {
      if (i < arr.length - 1) {
        result.push(arr[i + 1])
      }
    } else if (arr[i] == "--double-prev") {
      if (i > 1 && arr[i - 2] !== "--discard-next") {
        result.push(arr[i - 1])
      }
    } else {
      result.push(arr[i])
    }
  }
  return result
}
