/**
 * @param {string} sentence
 * @return {boolean}
 */
var isCircularSentence = function (sentence) {
    let words = sentence.split(' ')

    for (let i = 0; i < words.length - 1; i++) {
        let last = words[i][words[i].length - 1]
        let first = words[i + 1][0]
        if (last !== first) return false
    }
    return words[words.length - 1].at(-1) === words[0][0]
};