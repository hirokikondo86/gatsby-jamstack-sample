module.exports = {
  siteMetadata: {
    title: 'Portfolio',
    description: 'This page is theportfolio for Hiroki Kondo',
    author: 'Hiroki Kondo',
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-plugin-styled-components`,
  ],
};
