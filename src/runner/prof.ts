import {generateBid} from "../dsp/join-ad-interest-group/module";

const loop = 100;
console.log("runner start")

for (let step = 0; step < loop; step++) {
    generateBid({
        owner: '',
        name: '',
        ads: [{renderUrl: 'https://example.com'}]
    }, undefined, undefined, undefined, undefined)
}

console.log("runner end")
