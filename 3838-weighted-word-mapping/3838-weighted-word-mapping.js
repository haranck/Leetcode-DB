/**
 * @param {string[]} words
 * @param {number[]} weights
 * @return {string}
 */
var mapWordWeights = function (words, weights) {
    let res = "";
    const rev = "zyxwvutsrqponmlkjihgfedcba";

    for (let word of words) {
        let sum = 0;

        for (let ch of word) {
            sum += weights[ch.charCodeAt(0) - 97]
        }

        res += rev[sum % 26]
    }

    return res;
};