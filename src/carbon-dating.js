const CustomError = require("../extensions/custom-error")

const MODERN_ACTIVITY = 15
const HALF_LIFE_PERIOD = 5730

module.exports = function dateSample(sampleActivity) {
  const finalActivity = parseFloat(sampleActivity)

  if (
    typeof sampleActivity !== "string" ||
    finalActivity <= 0 ||
    finalActivity > MODERN_ACTIVITY ||
    isNaN(finalActivity)
  )
    return false

  return Math.ceil(
    (Math.log(MODERN_ACTIVITY / finalActivity) * HALF_LIFE_PERIOD) / 0.693
  )
}
