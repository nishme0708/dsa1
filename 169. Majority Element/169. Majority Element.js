/*
 * Problem: 169. Majority Element
 * Difficulty: Easy
 * Link: https://leetcode.com/problems/majority-element/submissions/1905164763/
 * Language: javascript
 * Date: 2026-02-02
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement1 = function (nums) {
    let map = new Map()
    let max = 0;
    let val;
    for (let item of nums) {
        let current = map.get(item) || 0;
        current++;
        map.set(item, current);
        if (current > max) {
            max = current;
            val = item;
        }
    }
    return val;
};
var majorityElement = function (nums) {
    let val = nums[0];
    let count = 1;
    let n = nums.length;
    for (let i = 1; i < nums.length; i++) {
        let nval = nums[i];
        if (val == nval) {
            count++;
          
        } else {
            if (count == 0) {
                val = nval;
                count = 1;
            } else {
                count--;
            }
        }
    }
    return val;
};
