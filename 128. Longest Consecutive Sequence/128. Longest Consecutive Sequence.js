/*
 * Problem: 128. Longest Consecutive Sequence
 * Difficulty: Medium
 * Link: https://leetcode.com/problems/longest-consecutive-sequence/submissions/1909876545/
 * Language: javascript
 * Date: 2026-02-06
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
    let set = new Set(nums);
    let max = 0;
    for (let item of set) {
        if (!set.has(item - 1)) {
            temp = 1;
            let i = 1;
            while (set.has(item + i)) {
                temp++; i++;
            }
            max = Math.max(max, temp)
        }
    }
    return max;
};
