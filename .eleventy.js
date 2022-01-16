const { transforms, shortcodes, plugins } = require('./src/_11ty')

module.exports = eleventyConfig => {
  // Layout aliases
  for (const name of ['home', 'page']) {
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
  for (const plugin of plugins) {
    eleventyConfig.addPlugin(plugin)
  }

  return {
    dir: {
      input: './src',
      output: './docs'
    }
  }
}
