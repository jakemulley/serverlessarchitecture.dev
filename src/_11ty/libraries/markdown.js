const slugify = require('slugify')
const markdownIt = require('markdown-it')
const markdownItAnchor = require('markdown-it-anchor')

module.exports = markdownIt().use(markdownItAnchor, {
  slugify (string) {
    return slugify(string, {
      lower: true
    })
  }
})
