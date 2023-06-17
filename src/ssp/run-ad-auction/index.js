const runAuction = async () => {
    const auctionConfig = {
        "seller": 'https://ssp.paa-tips.com:44304',
        "decisionLogicUrl": "https://ssp.paa-tips.com:44304/ssp/desicion-logic-url/index.js",
        "interestGroupBuyers": ["https://dsp.paa-tips.com:44303"],
        "resolveToConfig": true,
    };
    const opaqueUrl = await navigator.runAdAuction(auctionConfig);
    addAdSlot("fledge-ad-container", 320, 50, opaqueUrl);
}

function addAdSlot(containerId, adWidth, adHeight, ffConfig) {
    const container = document.getElementById(containerId)

    const iframe = document.createElement('iframe')
    iframe.width = adWidth.toString();
    iframe.height = adHeight.toString();
    iframe.setAttribute('frameBorder', '0');
    container.appendChild(iframe)
    const doc = (iframe.contentWindow || iframe.contentDocument).document
    doc.open();
    doc.write('<head>');
    doc.write('<meta charset="utf-8">');
    doc.write('<style>')
    doc.write('* { margin: 0; padding: 0; }')
    doc.write('iframe, fencedframe { width: 100%; height: 100vh; border: none; overflow: hidden; }')
    doc.write('</style>')
    doc.write('<' + '/head>');
    doc.write('<body></body>');
    doc.close();

    const ff = document.createElement('fencedframe')
    ff.setAttribute("mode", "opaque-ads")
    ff.setAttribute("allow", "run-ad-auction")
    ff.config = ffConfig
    doc.body.appendChild(ff)

}
