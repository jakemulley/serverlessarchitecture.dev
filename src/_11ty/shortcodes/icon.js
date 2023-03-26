const simpleIcons = require('simple-icons/icons')

module.exports = (icon, classes) => {
  const firstChar = icon.charAt(0).toUpperCase()
  return `<div class="${classes}">${simpleIcons[`si${firstChar}${icon.slice(1)}`].svg}</div>`
}
