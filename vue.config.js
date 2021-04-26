module.exports = {
  publicPath: './',
  //如果你不需要使用eslint,把lintOnSave设为false即可
  lintOnSave: false,
  css: {
      modules: false
  },
  runtimeCompiler: true,
  devServer: {
      index: 'index.html',    //运行项目时候加载的第一入口
      port: 7007,
  },
  /**
   * Vue自定义路径别名 @指向src目录下
   */
  configureWebpack: {
      resolve: {
          alias: {
              'api': '@/api',
              'assets': '@/assets',
              'components': '@/components',
              'views': '@/views'
          }
      }
  }
};
