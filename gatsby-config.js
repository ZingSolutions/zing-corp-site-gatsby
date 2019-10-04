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
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-146603057-1",
        respectDNT: true,
      },
    },
    {
      resolve: "gatsby-plugin-hubspot",
      options: {
        trackingCode: "5721076",
        respectDNT: true,
        productionOnly: true,
      },
    },
  ],
}
