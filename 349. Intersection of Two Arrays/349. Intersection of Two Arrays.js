/*
 * Problem: 349. Intersection of Two Arrays
 * Difficulty: Easy
 * Link: https://leetcode.com/problems/intersection-of-two-arrays/submissions/1902949382/
 * Language: javascript
 * Date: 2026-01-31
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    let setA = new Set(nums1)
    let setB = new Set(nums2)
    let res = [];
    for(let item of setA) {
        if(setB.has(item)) {
            res.push(item)
        }
    }
    return res;
};
