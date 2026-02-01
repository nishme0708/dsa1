/*
 * Problem: 136. Single Number
 * Difficulty: Easy
 * Link: https://leetcode.com/problems/single-number/submissions/1904182000/
 * Language: javascript
 * Date: 2026-02-01
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let res = 0
    for(let item of nums) {
        res = res ^ item
    }
   return res
};
