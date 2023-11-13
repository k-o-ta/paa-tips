export const calc = () => {
    // return 10
    const loop = 10000;
    var ans = 0

    for (let step = 0; step < loop; step++) {
        ans += step
    }
    return ans
}
