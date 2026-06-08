/**
 * @param {number[]} nums
 * @param {number} pivot
 * @return {number[]}
 */
var pivotArray = function(nums, pivot) {
    if(nums.length<2)return nums
    let left = []
    let right = []
    let equal = []
    for(let i = 0 ;i<nums.length;i++){
        if(pivot<nums[i]){
            right.push(nums[i])
        }else if(pivot===nums[i]){
            equal.push(nums[i])
        }else{ 
            left.push(nums[i])
        }
    }
    return [...left,...equal,...right]
};