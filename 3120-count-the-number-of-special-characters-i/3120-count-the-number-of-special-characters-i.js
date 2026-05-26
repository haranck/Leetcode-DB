/**
 * @param {string} word
 * @return {number}
 */
var numberOfSpecialChars = function (word) {
    let count = 0
    let set = new Set(word)
    let visited = new Set()

    for (let char of word) {
        let lower = char.toLowerCase()
        if (
            set.has(lower.toLowerCase()) &&
            set.has(lower.toUpperCase()) &&
            !visited.has(lower)
        ) {
            count++
            visited.add(lower)
        }
    }
    return count
};