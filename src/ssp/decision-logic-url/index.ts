globalThis.scoreAd = function(adMetadata, bid, auctionConfig, trustedScoringSignals, browserSignals) {
    console.log('scoreAd', JSON.stringify({
        adMetadata,
        bid,
        auctionConfig,
        trustedScoringSignals,
        browserSignals,
    }))
    return bid;
}

globalThis.reportResult = function(auctionConfig, browserSignals) {
    console.log('reportResult', JSON.stringify({
        auctionConfig,
        browserSignals
    }))
}
