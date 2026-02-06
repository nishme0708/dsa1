/*
 * Problem: 560. Subarray Sum Equals K
 * Difficulty: Medium
 * Link: https://leetcode.com/problems/subarray-sum-equals-k/submissions/1910183320/
 * Language: javascript
 * Date: 2026-02-06
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
    let map = new Map();
    // here we are counting so keeping 1
    map.set(0, 1);
    let sum = 0;
    let res = 0;
    for (let i = 0; i < nums.length; i++) {
        let val = nums[i];
        sum += val;
        let diff = sum - k;
        if (map.has(diff)) {
            // Adding the diff value
            res += map.get(diff);
        }
        // no conditional update - since we need to find all positions it occured before times.
        map.set(sum, (map.get(sum) || 0) + 1)

    }
    return res;
};
