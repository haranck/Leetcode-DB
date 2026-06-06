/**
 * @param {number[]} nums
 * @return {number[]}
 */
var leftRightDifference = function(nums) {
    let total = nums.reduce((a, b) => a + b, 0);
    let leftSum = 0;
    let ans = [];

    for (let num of nums) {
        total -= num; // rightSum
        ans.push(Math.abs(leftSum - total));
        leftSum += num;
    }

    return ans;
};