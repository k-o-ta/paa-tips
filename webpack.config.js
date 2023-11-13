// const path = require('path');
// const CopyPlugin = require("copy-webpack-plugin")

module.exports = {
    // devtool: 'inline-source-map',
    // mode: "development",
    // entry: {
    //     "dsp/join-ad-interest-group/index": "./src/dsp/join-ad-interest-group/index.ts",
    //     "dsp/bidding-logic-url/index": "./src/dsp/bidding-logic-url/index.ts",
    //     "ssp/run-ad-auction/index": "./src/ssp/run-ad-auction/index.ts",
    //     "ssp/decision-logic-url/index": "./src/ssp/decision-logic-url/index.ts",
    // },
    module: {
        rules: [
            {
                use: 'ts-loader',
                exclude: [/node_modules/],
            },
        ],
    },
    resolve: {
        extensions: ['.ts'],
    },
    // output: {
    //     filename: '[name].js',
    //     path: path.resolve(__dirname, 'dist/dev'),
    // },
    //
    // plugins: [
    //     new CopyPlugin({
    //         patterns: [
    //             {
    //                 context: path.resolve(__dirname, "src"),
    //                 from: path.resolve(__dirname, "src/**/*.html"),
    //                 to: path.resolve(__dirname, "dist/dev/"),
    //             },
    //             {
    //                 context: path.resolve(__dirname, "src"),
    //                 from: path.resolve(__dirname, "src/**/*.png"),
    //                 to: path.resolve(__dirname, "dist/dev/"),
    //             }
    //         ]
    //     })],
}
