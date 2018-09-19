const path = require('path');

module.exports = {
    entry: {
        questions: "./src/questions/index.tsx",
        quiz: "./src/quiz/index.tsx",
        results: "./src/results/index.tsx",
        settings: "./src/settings/index.tsx"
    },
    mode: 'development',
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: '[name]-bundle.js'
    },
    devtool: "inline-source-map",
    resolve: {
        extensions: [".ts", ".tsx", ".js"]
    },
    module: {
        rules: [
            { test: /\.tsx?$/, loader: "ts-loader", exclude: /node_modules/ }
        ]
    }
}