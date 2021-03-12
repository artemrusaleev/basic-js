const CustomError = require("../extensions/custom-error")

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let depthCount = 0
    if (Array.isArray(arr)) {
      arr.forEach((el,i,array)=>{
        if (Array.isArray(el)) {
          depthCount = Math.max(this.calculateDepth(array[i]), depthCount)
        }
      })
      ++depthCount
    }
    return depthCount
  }
}
