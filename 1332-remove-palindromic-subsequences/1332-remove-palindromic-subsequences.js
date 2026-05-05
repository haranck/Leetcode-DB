/**
 * @param {string} s
 * @return {number}
 */
var removePalindromeSub = function(s) {
    if (s.length === 0) return 0;

    let reversed = s.split('').reverse().join('');

    if (s === reversed) return 1;

    return 2;
};