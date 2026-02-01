/*
 * Problem: 268. Missing Number
 * Difficulty: Easy
 * Link: https://leetcode.com/problems/missing-number/description/
 * Language: javascript
 * Date: 2026-02-01
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber1 = function(nums) {
    let s = new Set(nums)
    for(let i=0;i<=nums.length;i++) {
        if(!s.has(i)) {
            return i;
        }
    }
};

var missingNumber = function(nums) {
    let n = nums.length;
    const exp = (n * (n+1)) / 2;
    const sum = nums.reduce((a,c)=>a+c,0)
    return exp - sum;
};
