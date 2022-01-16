module.exports = {
  transforms: {
    css: require('./transforms/css')
  },
  shortcodes: {
    now: require('./shortcodes/now')
  },
  libraries: {
    md: require('./libraries/markdown')
  },
  plugins: {
    '@11ty/eleventy-navigation': null,
    'eleventy-plugin-toc': {
      tags: ['h2'],
      wrapperClass: 'prose-ol:pl-0 prose-li:list-none prose-li:pl-0'
    }
  }
}
