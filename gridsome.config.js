// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
const path = require('path')
const autoprefixer = require("autoprefixer");

function addStyleResource(rule) {
  rule.use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [
        path.resolve(__dirname, './src/assets/styles/abstracts/*.scss'),
      ],
    })
}

module.exports = {
  // chainWebpack(config) {
  // // Load variables for all vue-files
  // const types = ['vue-modules', 'vue', 'normal-modules', 'normal']

  // types.forEach(type => {
  // addStyleResource(config.module.rule('scss').oneOf(type))
  // })
  // },
  siteName: 'Car Center',
  titleTemplate: 'Car Center - %s',
  icon: './src/assets/img/Logo-alt.svg',
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'blog/**/*.md',
        typeName: 'Post',
        remark: {}
      }
    }
  ],
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          autoprefixer()
        ]
      }
    }
  }
}

