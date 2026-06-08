/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var sumOfGoodIntegers = function (n, k) {
    let array = []
    for (let i = 0; i < (k + n) * 2; i++) {
        if (Math.abs(n - i) <= k) {
            array.push(i)
        }
    }
    let sum = 0
    for (let j = 0; j < array.length; j++) {
        if ((array[j] & n) == 0) {
            sum += array[j]
        }
    }
    return sum
};