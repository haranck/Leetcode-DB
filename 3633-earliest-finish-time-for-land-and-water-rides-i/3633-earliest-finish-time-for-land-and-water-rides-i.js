/**
 * @param {number[]} landStartTime
 * @param {number[]} landDuration
 * @param {number[]} waterStartTime
 * @param {number[]} waterDuration
 * @return {number}
 */
var earliestFinishTime = function(ls, ld, ws, wd) {

    const calc = (s1, d1, s2, d2) => {
        let end = Math.min(...s1.map((v, i) => v + d1[i]));
        return Math.min(...s2.map((v, i) => Math.max(end, v) + d2[i]));
    };

    return Math.min(
        calc(ls, ld, ws, wd),
        calc(ws, wd, ls, ld)
    );
};