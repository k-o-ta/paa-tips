import {calc} from "./calc";

globalThis.generateBid = function(group, auctionSignals, perBuyerSignals, trustedBiddingSignals, browserSignals) {
    console.log('generateBid',
        JSON.stringify({
            group,
            auctionSignals,
            perBuyerSignals,
            trustedBiddingSignals,
            browserSignals,
        })
    )
    console.log('calc', calc())
    return {
        bid: 1,
        ad: {
            adName: "adName"
        },
        render: group.ads[0].renderUrl,
    }
}

globalThis.reportWin = function(auctionSignals, perBuyerSignals, sellerSignals, browserSignals) {
    console.log("reportWin", JSON.stringify({
        auctionSignals,
        perBuyerSignals,
        sellerSignals,
        browserSignals
    }))
}


