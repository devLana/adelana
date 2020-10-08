module.exports = {
  siteMetadata: {
    title: "Adelana Onafuwa",
    description: "Portfolio and personal website of Adelana Onafuwa. Software Developer and JavaScript fan.",
    author: "Adelana Onafuwa",
    siteUrl: "https://adelana.dev",
    imageUrl: "https://adelana.dev/logo/logo.png",
    menuLinks: [
      {
        name: "Home",
        link: "/",
      },
      {
        name: "Work",
        link: "/work",
      },
      {
        name: "Contact",
        link: "/contact",
      },
    ],
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "logos",
        path: `${__dirname}/static/logo/`,
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "adelana.dev",
        short_name: "adelana",
        start_url: "/",
        description: "Portfolio and personal website of Adelana Onafuwa. Software Developer and JavaScript fan.",
        lang: "en",
        orientation: "portrait",
        background_color: "#663399",
        theme_color: "#663399",
        display: "standalone",
        icon: "static/logo/logo.png",
        icon_purpose: "any maskable"
      },
    },
    "gatsby-plugin-offline",
  ],
};
