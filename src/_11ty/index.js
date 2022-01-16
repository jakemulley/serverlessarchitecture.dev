module.exports = {
  transforms: {
    css: require('./transforms/css')
  },
  shortcodes: {
    now: require('./shortcodes/now')
  },
  plugins: [
    require('@11ty/eleventy-navigation')
  ]
}
