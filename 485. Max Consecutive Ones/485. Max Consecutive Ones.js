/*
 * Problem: 485. Max Consecutive Ones
 * Difficulty: Easy
 * Link: https://leetcode.com/problems/max-consecutive-ones/submissions/1904169086/
 * Language: javascript
 * Date: 2026-02-01
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let con = 0;
    let max = 0;
    for(let item of nums) {
        if(item == 1) {
            con++;
            max = Math.max(max, con)
        } else {
            con = 0;
        }
    }
    return max
};
