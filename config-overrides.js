const {
  override,
  fixBabelImports
} = require('customize-cra');

const GenerateAssetPlugin = require('generate-asset-webpack-plugin');

//这就是那个你喜欢的写包含hash的json文件的部分
const createJson = function (compilation) {
  return JSON.stringify({
    
  });
};
module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: 'css',
  }),
);

// module.exports = function override(config, env) {

//   if (config.plugins) {
//     config.plugins.push(new GenerateAssetPlugin({
//       filename: 'config.json', //输出到根目录下的config.json文件
//       fn: (compilation, cb) => {
//         cb(null, createJson(compilation));
//       },
//       extraFiles: []
//     }));
//   }

//   return config;
// };