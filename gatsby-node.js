// Implement the Gatsby API “onCreatePage”. This is
// called after every page is created.
exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions

  page.matchPath = "/*"
  if (page.path.match(/^\/blog/)) {
    page.matchPath = "/blog/*"
  }
  createPage(page)
}
