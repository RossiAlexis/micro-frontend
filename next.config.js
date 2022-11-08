/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  /* config options here */
  webpack: (config, options) => {
    const { ModuleFederationPlugin } = options.webpack.container;
    const HtmlWebpackPlugin = require("html-webpack-plugin");
    if (!options.isServer) {
      config.plugins.push(
        new ModuleFederationPlugin({
          name: "pepe",
          // library: {
          //   type: "var",
          //   name: "Loyalty",
          // },
          filename: "static/chunks/remoteEntry.js",
          exposes: {
            "./Loyalty": "./src/components/Loyalty/index",
          },
          remotes: {},
          shared: [],
        })
      );

      config.cache = false;

      config.output.publicPath = "https://micro-frontend-wine.vercel.app/_next/";
      new HtmlWebpackPlugin({
        template: "./public/index.html",
      });
    }
    return config;
  },
};

module.exports = nextConfig;
