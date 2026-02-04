/*
 * Problem: 2149. Rearrange Array Elements by Sign
 * Difficulty: Medium
 * Link: https://leetcode.com/problems/rearrange-array-elements-by-sign/submissions/1908031746/
 * Language: javascript
 * Date: 2026-02-04
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var rearrangeArray = function (nums) {
    let res = new Array(nums.length);
    let pos = 0; let neg = 1;
    for (let i = 0; i < nums.length; i++) {
        let val = nums[i]
        if (val > 0) {
            res[pos] = val;
            pos += 2
        } else {
            res[neg] = val;
            neg += 2
        }
    }
    return res
};
