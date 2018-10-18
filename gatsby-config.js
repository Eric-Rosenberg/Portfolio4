module.exports = {
  siteMetadata: {
    title: 'Eric Rosenberg Portfolio',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-emotion',
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Eric Rosenberg Portfolio',
        short_name: 'portfolio',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
  ],
};
