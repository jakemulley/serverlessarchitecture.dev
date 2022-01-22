const { transforms, shortcodes, plugins, libraries, customExtensions } = require('./src/_11ty')

module.exports = eleventyConfig => {
  // Layout aliases
  for (const name of ['home', 'page', 'list']) {
    eleventyConfig.addLayoutAlias(name, `layouts/${name}.njk`)
  }

  // Passthroughs
  eleventyConfig.addPassthroughCopy('./src/CNAME')
  eleventyConfig.addPassthroughCopy('./src/robots.txt')

  // Watch targets
  eleventyConfig.addWatchTarget('./src/**/*.uml')

  // Transforms
  for (const name of Object.keys(transforms)) {
    eleventyConfig.addTransform(name, transforms[name])
  }

  // Shortcodes
  for (const name of Object.keys(shortcodes)) {
    if (name.includes('async')) {
      eleventyConfig.addAsyncShortcode(name, shortcodes[name])
    } else {
      eleventyConfig.addShortcode(name, shortcodes[name])
    }
  }

  // Plugins
  for (const name of Object.keys(plugins)) {
    eleventyConfig.addPlugin(require(name), plugins[name])
  }

  // Libraries
  for (const name of Object.keys(libraries)) {
    eleventyConfig.setLibrary(name, libraries[name])
  }

  // Custom template extensions
  for (const name of Object.keys(customExtensions)) {
    eleventyConfig.addTemplateFormats(name)
    eleventyConfig.addExtension(name, {
      ...customExtensions[name].options,
      compile: customExtensions[name].compile
    })
  }

  return {
    dir: {
      input: './src',
      output: './docs'
    },
    markdownTemplateEngine: 'njk'
  }
}
