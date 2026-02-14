/*
 * Problem: 8. String to Integer (atoi)
 * Difficulty: Medium
 * Link: https://leetcode.com/problems/string-to-integer-atoi/submissions/1919113690/
 * Language: javascript
 * Date: 2026-02-14
 */

/**
 * @param {string} s
 * @return {number}
 */
const INT_MIN = -2147483648;
const INT_MAX = 2147483647;

var myAtoi = function (s) {
    let i = 0;
    while (s[i] == ' ') {
        i++;
    }
    let sign = 1;
    if (i < s.length && (s[i] == '-' || s[i] == '+')) {
        if (s[i] == '-') {
            sign = -1;
        }
        i++;
    }
    return helper(s, i, 0, sign)


};

function helper(s, i, total, sign) {
    if (i >= s.length) {
        return total * sign;
    }
    let char = s[i];
    if (char == ' ') {
        return total * sign

    }
    if (isNaN(char)) {
        return total * sign;
    }
    let num = Number(char);
    total = (total * 10) + num;
    if (sign * total <= INT_MIN) return INT_MIN;
    if (sign * total >= INT_MAX) return INT_MAX;

    return helper(s, i + 1, total, sign);
}
