/*
 * Problem: 75. Sort Colors
 * Difficulty: Medium
 * Link: https://leetcode.com/problems/sort-colors/submissions/1904431836/
 * Language: javascript
 * Date: 2026-02-01
 */

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
    let l = 0, m = 0, h = nums.length - 1;
    while (m <= h) {
        let v = nums[m];
        if (v == 0) {
            if (m != l) {
                [nums[m], nums[l]] = [nums[l], nums[m]]
            }
            l++;
            m++;
        } else if (v == 1) {
            m++;
        } else {
            [nums[m], nums[h]] = [nums[h], nums[m]]
            h--;
            // don't move m yet since the item is from unknown
        }
    }
};
