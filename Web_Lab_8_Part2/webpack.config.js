const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
    mode: 'development',

    // entry files
    entry: './src/index.js',

    // output bundles (location)
    output: {
        path: path.join( __dirname, 'dist' ),
        filename: 'main.js',
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, ".", "index.html")
        })
    ]
};