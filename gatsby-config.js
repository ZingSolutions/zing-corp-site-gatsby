/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  plugins: [
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Zing`,
        short_name: `Zing`,
        start_url: `/`,
        icon: `static/images/Favicon-PNG.png`,
      },
    },
  ],
}
