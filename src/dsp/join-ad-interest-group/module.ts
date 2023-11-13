import {calc} from "../bidding-logic-url/calc";

export function generateBid(group,
                            auctionSignals,
                            perBuyerSignals,
                            trustedBiddingSignals,
                            browserSignals
) {
    return {
        bid: calc(),
        ad: {
            adName: "adName"
        },
        render: group.ads[0].renderUrl,
    }
}

export function reportWin(auctionSignals, perBuyerSignals, sellerSignals, browserSignals) {
    console.log("reportWin", JSON.stringify({
        auctionSignals,
        perBuyerSignals,
        sellerSignals,
        browserSignals
    }))
}