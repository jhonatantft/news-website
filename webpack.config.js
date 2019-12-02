const path = require('path')
const HtmlWebPackPlugin = require( 'html-webpack-plugin' )
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const envs = {
    development: 'dev',
    production: 'prd',
}
const env = envs[process.env.NODE_ENV || 'development']

module.exports = {
    entry: path.resolve(__dirname, 'src/index.js'),
    output: {
        path: path.resolve( __dirname, 'dist' ),
        filename: 'main.js',
        publicPath: '/'
    },
    devServer: {
        historyApiFallback: true // redirect all server request to index.html
    },
    devtool: 'source-map', 
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                query: {
                    presets: ['@babel/preset-env', '@babel/preset-react']
                }
            },
            {
                test:/\.css$/,
                use:[
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: (resourcePath, context) => {
                                // publicPath is the relative path of the resource to the context
                                // e.g. for ./styles/css/App.css the publicPath will be ../../
                                // while for ./css/App.css the publicPath will be ../
                                return path.relative(path.dirname(resourcePath), context) + '/';
                            }
                        }
                    },
                    'css-loader'
                ]
            },
            {
                test: /\.(png|j?g|svg|gif|woff(2)?|ttf|eot|svg)?$/,
                use: 'file-loader'
             }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
           template: path.resolve( __dirname, 'public/index.html' ),
           filename: 'index.html'
        }),
        new MiniCssExtractPlugin({
            filename: 'css/[name].css',
            chunkFilename: 'css/[id].css'
        })
     ]
}