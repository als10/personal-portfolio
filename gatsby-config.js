module.exports = {
  siteMetadata: {
    siteUrl: 'https://alstondmello.netlify.app',
    title: "Alston's Portfolio",
  },
  plugins: [
    'gatsby-plugin-gatsby-cloud',
    'gatsby-plugin-postcss',
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-plugin-smoothscroll',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'content',
        path: `${__dirname}/content`,
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/icon.png',
      },
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-mdx',
  ],
};
