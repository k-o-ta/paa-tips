import {generateBid, reportWin} from "../join-ad-interest-group/module";

globalThis.generateBid = function(group, auctionSignals, perBuyerSignals, trustedBiddingSignals, browserSignals) {
    return generateBid(group, auctionSignals, perBuyerSignals, trustedBiddingSignals, browserSignals)
}

globalThis.reportWin = function(auctionSignals, perBuyerSignals, sellerSignals, browserSignals) {
    return reportWin(auctionSignals, perBuyerSignals, sellerSignals, browserSignals)
}


