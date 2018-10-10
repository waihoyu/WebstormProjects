//webpack 必须采用commonjs写法

let path = require('path')
let p = path.resolve('./dist')

module.exports = {
    entry:'./src/main.js',
    mode:'none',
    output:{
        filename:'bundle.js',
        path:path.resolve('./dist')
    },
    //打包的入口文件，webpack会自动查找相关的依赖进行打包。
    //模块的解析规则
    //  -js  匹配所有的js用 babel-loader 转义  排除掉node_modules
    module:{
        rules:[
            {test:/\.js$/,use:'babel-loader',exclude:/node_modules/}
        ]

    }

}
