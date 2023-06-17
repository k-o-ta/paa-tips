function scoreAd(adMetadata, bid, auctionConfig, trustedScoringSignals, browserSignals) {
    console.log(
        JSON.stringify({
            adMetadata,
            bid,
            auctionConfig,
            trustedScoringSignals,
            browserSignals,
        })
    );
    return bid;
}

function reportResult(auctionConfig, browserSignals) {
    console.log(auctionConfig)
    console.log(browserSignals)
}
