console.log("joinAdIG")

const interestGroup = {
    owner: 'https://dsp.paa-tips.com:44303',
    name: 'paa-tips',
    biddingLogicUrl: 'https://dsp.paa-tips.com:44303/dsp/bidding-logic-url/index.js',
    ads: [{ renderUrl: 'https://dsp.paa-tips.com:44303/dsp/creative/index.html' }]
}

navigator.joinAdInterestGroup(interestGroup, 60 * 60 * 24 * 7)
