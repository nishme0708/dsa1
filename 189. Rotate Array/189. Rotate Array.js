/*
 * Problem: 189. Rotate Array
 * Difficulty: Medium
 * Link: https://leetcode.com/problems/rotate-array/submissions/1902845155/
 * Language: javascript
 * Date: 2026-01-31
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
function rev(arr, start, end) {
    while(start < end) {
        let temp = arr[start];
        arr[start] = arr[end]
        arr[end] = temp
        start++
        end--
    }
} 
var rotate = function(nums, k) {
    const n = nums.length;
    k = k%n;
    rev(nums, 0, n-k-1)
    rev(nums,n-k,n-1)
    rev(nums,0,n-1)
    return nums

};
