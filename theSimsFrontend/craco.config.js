const CracoLessPlugin = require('craco-less');
const CracoAntDesignPlugin = require("craco-antd");

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          modifyVars: {

          },
          javascriptEnabled: true
        },
        cssLoaderOptions: {
          modules: { localIdentName: '[local]_[hash:base64:5]' }
        }
      }
    }
  ]
};