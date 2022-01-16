function getUrlPath (includeCurrentPage = false, url) {
  const parts = url.split('/')
  const partsToRemove = includeCurrentPage ? 1 : 2
  const path = parts.slice(1, parts.length - partsToRemove)
  return path.join('/')
}

module.exports = {
  eleventyNavigation: {
    title (data) {
      return data.title
    },
    tagline (data) {
      return data.tagline
    },
    key (data) {
      return data.key || getUrlPath(true, data.page.url)
    },
    parent (data) {
      return data.key || getUrlPath(false, data.page.url)
    }
  }
}
