var webpack = require('webpack')

const HtmlWebpackPlugin = require('html-webpack-plugin')
var HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template:__dirname + '/app/index.html',
    filename:'index.html',
    inject:'body'
})
const DEVELOPMENT = process.env.NODE_ENV === 'development'
const JS_LOADER = {
    test:/\.(js|jsx)$/,
    loaders: [
        'babel-loader'
    ],
    exclude: /node_modules/
}

const webpackConfig = {
    devtool: DEVELOPMENT ? 'cheap-module-inline-source-map' : 'cheap-source-map',
    entry:[
        'react-hot-loader/patch',
        'webpack-dev-server/client?http://localhost:8080',
        'webpack/hot/only-dev-server',
        './app/index.js'
        ],
    output:{
        path: __dirname + '/dist',
        filename:'index_bundle.js',
    },
    module:{
        loaders:[
            JS_LOADER,
            {
                test: /\.css$/,
                use: [{loader:'style-loader'},{loader:'css-loader'}]
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
        //new webpack.NoEmitOnErrorsPlugin(),
        HtmlWebpackPluginConfig
    ],
    devServer: {
        host: 'localhost',
        port: '8080',
        historyApiFallback: true,
        hot: true
    }
}
module.exports = webpackConfig
