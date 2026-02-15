/*
 * Problem: 1922. Count Good Numbers
 * Difficulty: Medium
 * Link: https://leetcode.com/problems/count-good-numbers/submissions/1919956383/
 * Language: javascript
 * Date: 2026-02-15
 */

/**
 * @param {number} n
 * @return {number}
 */
const MOD = 1000000007n;

var countGoodNumbers = function (n) {

    let nBig = BigInt(n);
    let odd = nBig / 2n;
    let even = nBig - odd;
    

    let r = ((pow(5n, even)) * pow(4n, odd)) % MOD;
    return Number(r);
};

function pow(val, raise) {
    if (raise == 0) {
        return 1n;
    }
    if (raise == 1) {
        return val;
    }
    let half = 1n;
    
    
    half = pow(val,raise/2n)
    half = (half * half) % MOD;
    if (raise % 2n == 0) {
        return half;
    }
    return (val * half) % MOD;
}
