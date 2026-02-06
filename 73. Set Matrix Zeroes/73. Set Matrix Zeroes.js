/*
 * Problem: 73. Set Matrix Zeroes
 * Difficulty: Medium
 * Link: https://leetcode.com/problems/set-matrix-zeroes/submissions/1909894606/
 * Language: javascript
 * Date: 2026-02-06
 */

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
    let setl = new Set();
    let setr = new Set();
    let m = matrix.length;
    let n = matrix[0].length;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (matrix[i][j] == 0) {
                setl.add(i);
                setr.add(j)
            }
        }
    }
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (setl.has(i) || setr.has(j)) {
                matrix[i][j] = 0;
            }
        }
    }
    return matrix;
};
