const path = require('path');
const { merge } = require('webpack-merge') // webpack-merge
const common = require('./webpack.config.js')

module.exports = merge(common, {
    mode: "production",
    entry: {
        "dsp/bidding-logic-url/index": "./src/dsp/bidding-logic-url/index.ts",
        "runner/prof": "./src/runner/prof.ts",
        "runner/inspect": "./src/runner/inspect.ts",
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist/prod'),
    },
})
