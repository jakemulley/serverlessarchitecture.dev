const { library, findIconDefinition, icon } = require('@fortawesome/fontawesome-svg-core')
const { fas } = require('@fortawesome/free-solid-svg-icons')
const { fab } = require('@fortawesome/free-brands-svg-icons')

library.add(fas, fab)

module.exports = (prefix, slug, classes) => {
  const iconDefinition = findIconDefinition({ prefix, iconName: slug })
  const i = icon(iconDefinition)

  return `${i.html}`
}
