/**
 * @param {number[][]} tasks
 * @return {number}
 */
var minimumEffort = function (tasks) {
    tasks.sort((a, b) => (b[1] - b[0]) - (a[1] - a[0]));
    let need = 0;
    for (let i = tasks.length - 1; i >= 0; i--) {
        const [actual, minimum] = tasks[i];
        need = Math.max(minimum, need + actual);
    }
    return need;
};