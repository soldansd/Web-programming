const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
    mode: 'development',

    // entry files
    entry: './src/index.ts',



    // output bundles (location)
    output: {
        path: path.resolve( __dirname, 'dist' ),
        filename: 'main.js',
    },

    resolve: {
        extensions: [ '.ts', '.js' ],
    },

    // loaders
    module: {
        rules: [
            {
                test: /\.tsx?/,
                use: 'ts-loader',
                exclude: /node_modules/,
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, ".", "index.html")
        })
    ]
};