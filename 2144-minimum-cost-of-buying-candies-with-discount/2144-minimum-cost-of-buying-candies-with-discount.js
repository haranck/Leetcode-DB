/**
 * @param {number[]} cost
 * @return {number}
 */
var minimumCost = function (cost) {
    cost.sort((a, b) => b - a)
    console.log(cost)
    let sum = cost.reduce((acc, curr) => acc + curr, 0)
    for (let i = 2; i < cost.length; i += 3){
        sum -= cost[i]
    }
    console.log(sum)
    return sum
};