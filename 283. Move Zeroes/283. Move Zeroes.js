/*
 * Problem: 283. Move Zeroes
 * Difficulty: Easy
 * Link: https://leetcode.com/problems/move-zeroes/submissions/1902870929/
 * Language: javascript
 * Date: 2026-01-31
 */

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    const n = nums.length;
    let zp = -1;
    for(let i=0;i<n;i++) {
        let val = nums[i];
        if(val == 0 && zp < 0) {
            zp = i;
        } else if (val != 0 && zp >= 0) {
            let temp = nums[i]
            nums[i] = nums[zp]
            nums[zp] = temp;
            zp++;
        }
    }
    return nums
};
