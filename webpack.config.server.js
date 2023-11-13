const path = require('path');

module.exports = {
    mode: "development",
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist/dev')
        },
        allowedHosts: ['all'],
        host: '127.0.0.1',
        headers: {
            'Ad-Auction-Allowed': true,
            'X-Allow-FLEDGE': true,
            'SUPPORTS-LOADING-MODE': 'fenced-frame',
        }
    }
}
