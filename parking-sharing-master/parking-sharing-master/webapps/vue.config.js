const path = require('path');
const { name } = require('./package');

function resolve (dir) {
  return path.join(__dirname, dir);
}

const port = 7777; // dev port

module.exports = {
  lintOnSave: false,
  outputDir: 'dist',
  assetsDir: 'static',
  filenameHashing: true,
  devServer: {
    // host: '0.0.0.0',
    hot: true,
    disableHostCheck: true,
    port: port,
    proxy: { // 跨域代理
      '/api': {
        // target: 'http://10.154.5.239:7009/api',
        target: 'http://localhost:7008/api',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    },
    overlay: {
      warnings: false,
      errors: true
    }
  },
  css: {
    loaderOptions: {
      sass: {
        data: `
          @import "@/assets/styles/_variable.scss";
        `
      }
    }
  },
  // 自定义webpack配置
  configureWebpack: {
    resolve: {
      alias: {
        '@': resolve('src')
      }
    },
    output: {
      // 把子应用打包成 umd 库格式
      library: `${name}-[name]`,
      libraryTarget: 'umd',
      jsonpFunction: `webpackJsonp_${name}`
    }
  },
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [
        path.resolve(__dirname, './src/less/variables.less') // 变量文件位置
      ]
    }
  }
};
