module.exports = api => {
  api.extendPackage({
    devDependencies: {
      "vue-content-loader": "^0.2.1",
      "vue-skeleton-webpack-plugin": "^1.2.2"
    }
  })

  const renderOptions = {
    './src/skeleton.js': './template/src/skeleton.js',
    './src/Skeleton.vue': './template/src/Skeleton.vue'
  }

  api.render(files => {
    const vueConfigJs = Object.keys(files).find(path => path.startsWith('vue.config.js'))
    if (!vueConfigJs) {
      Object.assign(renderOptions, {
        './vue.config.js': './template/vue.config.js'
      })
    }
  })
  api.render(renderOptions)
}
