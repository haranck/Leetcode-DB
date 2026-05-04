/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function(left, right) {
    let result = []
    for(let num = left ; num <= right ; num++){
        let isvalid = true
        let str = String(num)
        for(let i = 0 ; i < str.length ; i++){
            let digit = Number(str[i])
            if(digit === 0 || num % digit !== 0){
                isvalid = false
                break
            }
        }
        if(isvalid){
            result.push(num)
        }
    }
    return result
};