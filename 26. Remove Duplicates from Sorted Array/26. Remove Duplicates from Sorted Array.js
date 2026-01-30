/*
 * Problem: 26. Remove Duplicates from Sorted Array
 * Difficulty: Easy
 * Link: https://leetcode.com/problems/remove-duplicates-from-sorted-array/description/
 * Language: javascript
 * Date: 2026-01-30
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if(nums.length < 2) {
        return 1;
    }
    let j=1;
    for( let i =1;i<nums.length;i++) {
        if(nums[i] == nums[i-1]) {
            continue;
        }
        nums[j++] = nums[i]
    }
    return j
};
