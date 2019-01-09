const path = require('path');
const HtlmWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/app/index.js',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: "bundle.js"
    },
    devServer: {
        port: 8060
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    plugins: [
        new HtlmWebpackPlugin({
            template: './src/index.html'
        })
    ]
}