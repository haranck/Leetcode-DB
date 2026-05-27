/**
 * @param {string} word
 * @return {number}
 */
var numberOfSpecialChars = function (word) {
    let set = new Set(word)
    let visited = new Set()
    let count = 0

    for (let i = 0; i < word.length; i++) {
        let lower  = word[i].toLowerCase()
        if(set.has(lower) && set.has(lower.toUpperCase()) && !visited.has(lower) ){
            let lowercaseIndex = word.lastIndexOf(lower)
            let uppercaseIndex = word.indexOf(lower.toUpperCase())
            if(lowercaseIndex < uppercaseIndex) {
                count++
                visited.add(lower)
            }
        }
    }
    return count
};