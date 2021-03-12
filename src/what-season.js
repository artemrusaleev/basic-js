const CustomError = require("../extensions/custom-error")

module.exports = function getSeason(date) {
  if (!date) return "Unable to determine the time of year!"
  if (isNaN(date.valueOf())) throw new Error("Date is not valid")
  let month = Number(date.toJSON().split('-')[1])
  return (3 <= month  && month <= 5)
    ? "spring"
    : (6 <= month && month <= 8)
    ? "summer"
    : (9 <= month && month <= 11)
    ? "fall"
    : "winter"
}
