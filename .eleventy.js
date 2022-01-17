const { transforms, shortcodes, plugins, libraries } = require('./src/_11ty')

module.exports = eleventyConfig => {
  // Layout aliases
  for (const name of ['home', 'page', 'list']) {
    eleventyConfig.addLayoutAlias(name, `layouts/${name}.njk`)
  }

  // Passthroughs
  eleventyConfig.addPassthroughCopy('./src/CNAME')

  // Transforms
  for (const name of Object.keys(transforms)) {
    eleventyConfig.addTransform(name, transforms[name])
  }

  // Shortcodes
  for (const name of Object.keys(shortcodes)) {
    eleventyConfig.addShortcode(name, shortcodes[name])
  }

  // Plugins
  for (const name of Object.keys(plugins)) {
    eleventyConfig.addPlugin(require(name), plugins[name])
  }

  // Libraries
  for (const name of Object.keys(libraries)) {
    eleventyConfig.setLibrary(name, libraries[name])
  }

  return {
    dir: {
      input: './src',
      output: './docs'
    }
  }
}
