var findComplement = function(num) {
    let bit = num.toString(2);
    let str = "";

    for (let char of bit) {
        if (char === "1") {
            str += "0";
        } else {
            str += "1";
        }
    }

    return parseInt(str, 2);
};