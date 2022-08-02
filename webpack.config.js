const path = require('path');

module.exports = {
    entry: "./src/main.ts",
    output: {
        path: path.resolve(__dirname, './dist'),
    },
    resolve: {
        extensions: [".js"],
    },
    plugins: [
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
        ],
    },
    optimization: {
        minimize: true,
    },
};
