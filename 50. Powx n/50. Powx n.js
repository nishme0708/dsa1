/*
 * Problem: 50. Pow(x, n)
 * Difficulty: Medium
 * Link: https://leetcode.com/problems/powx-n/description/
 * Language: javascript
 * Date: 2026-02-15
 */

/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
    let sign = 1;
    if (n < 0) {
        sign = -1;
        n = 0 - n;
    }

    let res = pow(x, n);
    return sign > 0 ? res : (1 / res)
};

function pow(val, raise) {
    if (raise == 0) {
        return 1;
    }
    if (raise == 1) {
        return val;
    }
    let half = Math.floor(raise / 2);
    let res = pow(val, half);
    if (raise % 2 == 0) {
        return res * res;
    }
    return val * res * res;
}
