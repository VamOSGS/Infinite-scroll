const path = require('path');

const ExtractTextPlugin = require("extract-text-webpack-plugin");

const extractLess = new ExtractTextPlugin({
    filename: "[name].css",
    disable: process.env.NODE_ENV === "development"
});

module.exports = {
    entry: './src/js/index.jsx',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.less$/,
                use: extractLess.extract({
                    use: [{
                        loader: "css-loader"
                    }, {
                        loader: "less-loader"
                    }],
                    fallback: "style-loader"
                })
            }
        ]
    },
    plugins: [
        extractLess
    ],
    resolve: {
        modules: [
            'node_modules',
            path.resolve(__dirname, 'src'),
        ],
        extensions: ['.js', '.jsx', '.json', '.css'],
    },
    devServer: {
        contentBase: path.join(__dirname, 'build'),
        historyApiFallback: true,
    }
};



