const { defineConfig } = require('@vue/cli-service')
module.exports = {
  publicPath: process.env.PUBLIC_URL || "/",
  transpileDependencies: ["vuetify"],
};