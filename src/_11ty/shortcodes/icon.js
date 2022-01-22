const simpleIcons = require('simple-icons')

module.exports = (icon, classes) => {
  return `<div class="${classes}">${simpleIcons.Get(icon).svg}</div>`
}
