# Intro

优化 SPA 首屏加载白屏问题，基于 vue-skeleton-webpack-plugin & vue-content-loader 实现的 vue 2.x + vue-cli 3 插件。


## Use

```
npm i @vue/cli -g
vue create my-app
cd my-app
vue add skeleton
```

目测采用的更改 webpack 的方式，是通过添加一个新的 vue.config.js 实现。因此若项目中已有 vue.config.js，则请手动添加以下配置：

```
module.exports = {
  ... some config ...

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

  ... some config ...
}
```

[vue-skeleton-webpack-plugin 配置说明](https://github.com/lavas-project/vue-skeleton-webpack-plugin)

[vue-content-loader 配置说明](https://github.com/egoist/vue-content-loader)


## License

MIT
