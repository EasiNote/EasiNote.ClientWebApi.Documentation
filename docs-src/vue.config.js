// vue.config.js
module.exports = {
    publicPath: './',
    chainWebpack: config =>{
        config.plugin('html')
          .tap(args => {
            args[0].title = "EN web 回调测试";
            return args;
          })
      },
}