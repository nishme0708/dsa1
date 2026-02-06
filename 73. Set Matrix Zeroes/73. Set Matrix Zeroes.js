/*
 * Problem: 73. Set Matrix Zeroes
 * Difficulty: Medium
 * Link: https://leetcode.com/problems/set-matrix-zeroes/submissions/1910054133/
 * Language: javascript
 * Date: 2026-02-06
 */

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes1 = function (matrix) {
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

var setZeroes = function (matrix) {
    let m = matrix.length;
    let n = matrix[0].length;
    let col0 = 1;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (matrix[i][j] == 0) {
                if (j == 0) {
                    col0 = 0;
                } else {
                    matrix[i][0] = 0;
                    matrix[0][j] = 0;
                }

            }
        }
    }
    for (let i = m - 1; i >= 0; i--) {
        for (let j = n - 1; j >= 0; j--) {
            if (j == 0) {
                if (col0 == 0) {
                    matrix[i][j] = 0;
                }
            } else {
                if (matrix[i][0] == 0 || matrix[0][j] == 0) {
                    matrix[i][j] = 0;
                }
            }
        }
    }
    return matrix;
};
