import {generateBid} from "../dsp/join-ad-interest-group/module";

console.log("runner start")

while (true) {
    const bar = foo()
    var bid = 100 + bar
    bid = generateBid({
        owner: '',
        name: '',
        ads: [{renderUrl: 'https://example.com'}]
    }, undefined, undefined, undefined, undefined).bid
}

function foo(): number{
    return Math.random()
}
