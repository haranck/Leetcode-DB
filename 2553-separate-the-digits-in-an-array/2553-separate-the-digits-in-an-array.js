/**
 * @param {number[]} nums
 * @return {number[]}
 */
var separateDigits = function(nums) {
    let arr = []
    for(let i = 0 ;i <nums.length;i++){
        let number = String(nums[i]).split('')
        for(let num of number){
            arr.push(Number(num))
        }
    }
    return arr
};