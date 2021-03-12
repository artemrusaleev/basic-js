const CustomError = require("../extensions/custom-error")

module.exports = function countCats(matrix) {
  let catCounter = 0
  let temp = matrix.reduce((acc, value) => {
    acc.push(...value)
    return acc
  }, [])
  temp.forEach(el=>{
    el === '^^' ? catCounter +=1 : false
  })
  return catCounter
}
