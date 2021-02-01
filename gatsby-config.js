/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-eslint",
    "gatsby-plugin-emotion",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    "gatsby-transformer-remark",
    "gatsby-transformer-yaml",
    "gatsby-transformer-json",
    {
      resolve: "gatsby-plugin-alias-imports",
      options: {
        "@root": "",
        "@src": `${__dirname}/src/`,
      },
    },
  ],
};
