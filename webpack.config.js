const path = require('path');

module.exports = {
    devServer: {
        static: {
            directory: path.join(__dirname, 'src')
        },
        allowedHosts: [ 'all' ],
        headers: {
            'Ad-Auction-Allowed': true,
            'SUPPORTS-LOADING-MODE': 'fenced-frame',
        }
    }
}