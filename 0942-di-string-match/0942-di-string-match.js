/**
 * @param {string} s
 * @return {number[]}
 */
var diStringMatch = function(s) {
    let low = 0 
    let high = s.length

    let result = []
    for(let char of s){
        if(char === "I"){
            result.push(low)
            low++
        }else{
            result.push(high)
            high--
        }
    }
    result.push(low)

    return result
};