/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    let i = 0
    for(let char of t){
        if(char === s[i]){
            i++
        }
    }
    return i===s.length
};