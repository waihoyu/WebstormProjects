//webpack 必须采用commonjs写法

let path = require('path')
let p = path.resolve('./dist')
module.exports = {
    entry:'./src/main.js',
    output:{
        filename:'bundle.js',
        path:path.resolve('./dist')
    }
    //打包的入口文件，webpack会自动查找相关的依赖进行打包。
}
