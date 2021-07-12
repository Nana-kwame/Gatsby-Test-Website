module.exports = {
  siteMetadata: {
    title: `Nana Kwame Acheampong`,
    description: `Nana Kwame Acheampong. Frontend Engineer / UI Developer, build out your ideas and concepts with expertise and precision`,
    keywords:`Nana Kwame Acheampong, frontend engineer, UI developer, react, react native, idoc, mako`,
    author: `@gatsbyjs`,
  },
  plugins: [
    {
      resolve: `gatsby-source-contentful`,
      options:{
        spaceId: 'tbehez24jd0s',
        accessToken:'bG7D5FRS7SH1IKgRFWNhGnbR6GIzy9iYV3KtnAF3UUQ'
      }
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
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
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
