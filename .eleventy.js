const { transforms, shortcodes } = require('./src/_11ty')

module.exports = eleventyConfig => {
  // Layout aliases
  eleventyConfig.addLayoutAlias('page', 'layouts/page.njk')

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

  return {
    dir: {
      input: './src',
      output: './docs'
    }
  }
}
