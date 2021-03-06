/**
 * Created by niuhui on 2016/11/22.
 */
var path = require('path');

module.exports = {
    entry: './src/main.js',
    output: {
        path: './dist',
        publicPath: 'dist/',
        filename: 'app.bundle.js'
    },
    module: {
        loaders: [
            {test: /\.js$/,loader: 'babel',exclude: /node_modules/},
            //图片转换，小于8K自动转化为base64的编码
            {test: /\.(png|jpg|gif)$/,loader: 'url-loader?limit=8192'}
        ]
    },
    //这里用于安装babel，如果在更目录下的.babelrc配置了，这里可以不写
    babel: {
        presets: ['es2015','stage-0'],
        plugins: ['transform-runtime']
    },
    resolve: {
        alias: {
            'vue': 'vue/dist/vue.js'
        }
    }
}












