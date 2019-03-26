const path = require("path");

module.exports = {
    entry: [
        './src/index.js',
    ],
    resolve: {
        extensions: ['.jsx', '.js'],
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader', 'eslint-loader']
            }
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, 'app'),
    }
};
