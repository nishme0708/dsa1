/*
 * Problem: 53. Maximum Subarray
 * Difficulty: Medium
 * Link: https://leetcode.com/problems/maximum-subarray/description/
 * Language: javascript
 * Date: 2026-02-04
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    
    let max = nums[0];
    let maxSoFar = nums[0];

    for(let i=1;i<nums.length;i++) {
        
        let pick = max+nums[i];
        // pick or continue
        max = Math.max(nums[i], pick);
        maxSoFar = Math.max(maxSoFar, max)
    }
    return maxSoFar
};
