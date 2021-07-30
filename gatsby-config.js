module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "Tango Chess",
  },
  plugins: [
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
        resolve: 'gatsby-plugin-mdx',
          options: {
            root: __dirname,
            gatsbyRemarkPlugins: [
              {
                resolve: 'gatsby-remark-images',
                options: {
                  maxWidth: 500,
                  linkImagesToOriginal: false,
                },
              },
            ],
          },
        plugin: [
            {
                resolve: "gatsby-remark-images",
                options: {
                    maxWidth: 500,
                },
            },
        ],
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "blogs",
        path: "./blog/",
      },
      __key: "blogs",
    }, 
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "juegos",
        path: "./juegos/",
      },
      __key: "juegos",
    },       
  ],
};
