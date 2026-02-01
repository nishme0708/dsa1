/*
 * Problem: 1. Two Sum
 * Difficulty: Easy
 * Link: https://leetcode.com/problems/two-sum/submissions/1904397296/
 * Language: javascript
 * Date: 2026-02-01
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let map = new Map();

    for (let i = 0; i < nums.length; i++) {
        let diff = target - nums[i];
        if (map.has(diff) && map.get(diff) != i) {
            return [i, map.get(diff)]
        }
        map.set(nums[i], i);

    }
};
