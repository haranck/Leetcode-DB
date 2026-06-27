/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumLength = function(nums) {

    let freq = {};

    // Count frequency
    for (let num of nums) {
        freq[num] = (freq[num] || 0) + 1;
    }

    let ans = 1;

    // Handle 1 separately
    if (freq[1]) {
        let count = freq[1];
        if (count % 2 === 0) count--;
        ans = Math.max(ans, count);
    }

    for (let key in freq) {

        let num = Number(key);

        if (num === 1) continue;

        let current = num;
        let len = 0;

        while (freq[current]) {

            if (freq[current] >= 2) {
                len += 2;           // Take two copies
                current = current * current;
            } else {
                len += 1;           // Last element
                break;
            }
        }

        if (len % 2 === 0) len--;

        ans = Math.max(ans, len);
    }

    return ans;
};