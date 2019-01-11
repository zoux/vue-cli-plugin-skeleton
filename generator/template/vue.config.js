module.exports = {
  configureWebpack: {
    plugins: [
      new (require('vue-skeleton-webpack-plugin'))({
        webpackConfig: {
          entry: {
            app: require('path').resolve('./src/skeleton.js')
          }
        },
        minimize: true,
        quiet: true
      })
    ]
  }
}
