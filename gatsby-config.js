module.exports = {
  siteMetadata: {
    title: `saya@design`,
    description: `I\'m Sayaka Kubouchi, a UI/UX Designer`,
    author: `@sayadesign2`,
  },
  plugins: [
    `gatsby-image`,
    `gatsby-background-image`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['M PLUS Rounded 1c:500,700', 'Pacifico', 'Material+Icons']
        },
      }
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          //include: /assets/
        }
      }
    },
    {
      resolve: "gatsby-plugin-page-progress",
      options: {
        height: 5,
        prependToBody: false,
        color: `#FFCC66`
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
