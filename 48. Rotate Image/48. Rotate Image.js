/*
 * Problem: 48. Rotate Image
 * Difficulty: Medium
 * Link: https://leetcode.com/problems/rotate-image/submissions/1910114184/
 * Language: javascript
 * Date: 2026-02-06
 */

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
    let n = matrix.length;
    for (let i = 0; i < n; i++) {
        // using this to make sure we don't swap it back to place and only in upper triangle
        for (let j = i + 1; j < n; j++) {

            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]]

        }
    }
    // transpose and then reverse
    for (let i = 0; i < n; i++) {
        let start = 0; let end = n - 1;
        while (start < end) {
            [matrix[i][start], matrix[i][end]] = [matrix[i][end], matrix[i][start]]
            start++; end--;
        }
    }
};
