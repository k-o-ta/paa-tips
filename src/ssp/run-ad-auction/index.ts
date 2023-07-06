window.addEventListener('DOMContentLoaded', async (event) => {
    const auctionConfig = {
        "seller": 'https://ssp.paa-tips.com:44304',
        "decisionLogicUrl": "https://ssp.paa-tips.com:44304/ssp/decision-logic-url/index.js",
        "interestGroupBuyers": ["https://dsp.paa-tips.com:44303"],
        "resolveToConfig": true,
    }
    // @ts-ignore
    const result = await navigator.runAdAuction(auctionConfig)
    console.log('opaqueUrl', result)
    const container = document.getElementById('paa-ad-container')
    // @ts-ignore
    container.config = result
});
