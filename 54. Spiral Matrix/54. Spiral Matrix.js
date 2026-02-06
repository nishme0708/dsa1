/*
 * Problem: 54. Spiral Matrix
 * Difficulty: Medium
 * Link: https://leetcode.com/problems/spiral-matrix/submissions/1910160590/
 * Language: javascript
 * Date: 2026-02-06
 */

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
    let m = matrix.length;
    let n = matrix[0].length;
    let top = 0, left = 0, right = n - 1, bottom = m - 1;

    let res = [];
    while (top <= bottom && left <= right) {
        for (let i = left; i <= right; i++) {
            res.push(matrix[top][i])
        }
        top++;

        for (let i = top; i <= bottom; i++) {
            res.push(matrix[i][right])
        }
        right--;

        if (res.length == m * n) {
            break;
        }
        for (let i = right; i >= left; i--) {
            res.push(matrix[bottom][i])
        }
        bottom--;

        for (let i = bottom; i >= top; i--) {
            res.push(matrix[i][left])
        }
        left++;
    }
    return res;
};
