const CustomError = require("../extensions/custom-error")

module.exports = function repeater(
  str,
  {
    repeatTimes = 1,
    separator = "+",
    addition = "",
    additionRepeatTimes = 1,
    additionSeparator = "|"
  }
) {
  let resStr = ""
  let addStr = ""

  for (let i = 1; i < additionRepeatTimes; i++) {
    addStr = addStr + addition + additionSeparator
  }

  addStr = addStr + addition

  for (let i = 1; i < repeatTimes; i++) {
    resStr = resStr + str + addStr + separator
  }

  resStr = resStr + str + addStr

  return resStr
}
