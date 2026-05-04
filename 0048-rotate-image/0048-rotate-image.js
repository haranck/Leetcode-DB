/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
    let result = []

    for (let i = matrix.length - 1; i >= 0; i--) {
        result.push([...matrix[i]])
    }
    
    for (let j = 0; j < matrix.length; j++) {
        for (let k = 0; k < matrix.length; k++) {
            matrix[j][k] = result[k][j]
        }
    }
};