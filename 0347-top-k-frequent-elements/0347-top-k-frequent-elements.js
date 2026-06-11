/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let map = new Map();
    for (let num of nums) {
        map.set(num, (map.get(num) || 0) + 1);
    }
    let arr = [...map.entries()];
    arr.sort((a, b) => b[1] - a[1]);
    let result = [];
    for (let i = 0; i < k; i++) {
        result.push(arr[i][0]);
    }
    return result;
};