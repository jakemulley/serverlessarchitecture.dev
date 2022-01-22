module.exports = {
  transforms: {
    css: require('./transforms/css')
  },
  shortcodes: {
    now: require('./shortcodes/now'),
    icon: require('./shortcodes/icon'),
    asyncUml2Svg: require('./shortcodes/uml-to-svg')
  },
  libraries: {
    md: require('./libraries/markdown')
  },
  plugins: {
    '@11ty/eleventy-navigation': null,
    '@11ty/eleventy-plugin-inclusive-language': {},
    'eleventy-plugin-toc': {
      tags: ['h2'],
      wrapperClass: 'prose-ol:pl-0 prose-li:list-none prose-li:pl-0'
    }
  }
}
