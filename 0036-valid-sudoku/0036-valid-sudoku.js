/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {

    let rows = new Set();
    let cols = new Set();
    let boxes = new Set();

    for(let r = 0; r < 9; r++) {

        for(let c = 0; c < 9; c++) {

            let value = board[r][c];

            if(value === ".") continue;

            let rowKey = `${r}-${value}`;
            let colKey = `${c}-${value}`;

            let box = Math.floor(r / 3) + "-" + Math.floor(c / 3);
            let boxKey = `${box}-${value}`;

            if(
                rows.has(rowKey) ||
                cols.has(colKey) ||
                boxes.has(boxKey)
            ) {
                return false;
            }

            rows.add(rowKey);
            cols.add(colKey);
            boxes.add(boxKey);
        }
    }

    return true;
};