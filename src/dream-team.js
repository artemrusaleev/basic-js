const CustomError = require("../extensions/custom-error")

module.exports = function createDreamTeam(members) {
  if(!members || !Array.isArray(members)) return false
  let result = members.reduce((acc, value) => {
    if (typeof value === "string") {
      acc.push(value.replace(/\s/g, '').toUpperCase().slice(0, 1))
    }
    return acc.sort()
  }, [])
  return result.join('')
}
