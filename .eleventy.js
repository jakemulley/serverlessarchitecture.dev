module.exports = eleventyConfig => {
  // Layout aliases
  eleventyConfig.addLayoutAlias('page', 'layouts/page.njk')

  // Passthroughs
  eleventyConfig.addPassthroughCopy('./src/CNAME')

  return {
    dir: {
      input: './src',
      output: './docs'
    }
  }
}
