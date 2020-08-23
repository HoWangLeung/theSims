const CracoLessPlugin = require('craco-less');
const CracoAntDesignPlugin = require("craco-antd");

module.exports = {
    plugins: [
        {
          plugin: CracoAntDesignPlugin,
          options: {
            // customizeTheme: {
            //     "@primary-color": "#1DA57A",
            //     "@link-color": "#1DA57A"
            //   },

            cssLoaderOptions: {           
                modules: true,
                modules : {
                localIdentName: '[name]__[local]__[hash:base64:5]',
                }
            }
          
          }
        }
      ]
  };