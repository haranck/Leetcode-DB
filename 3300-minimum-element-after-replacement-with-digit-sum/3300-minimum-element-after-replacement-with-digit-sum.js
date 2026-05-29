/**
 * @param {number[]} nums
 * @return {number}
 */
var minElement = function (nums) {
    let sums = nums.map(num =>
        num.toString().split('')
            .reduce((acc, curr) => acc + Number(curr), 0)
    )
    return Math.min(...sums)
};