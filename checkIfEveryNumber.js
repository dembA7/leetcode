/**
 * @param {number[][]} matrix
 * @return {boolean}
 */

var checkValid = function(matrix) {
    return checkRows(matrix) && checkColumns(matrix)
};

function checkRows(matrix) {
    for (let i = 0; i < matrix.length; i++) {
        const set = new Set()
        for (let j = 0; j < matrix[i].length; j++) {
            set.add(matrix[i][j])
        }
        if (set.size !== matrix.length) return false
    }

    return true
}

function checkColumns(matrix) {
    for (let col = 0; col < matrix.length; col++) {
        const set = new Set()
        for (let row = 0; row < matrix.length; row++) {
            set.add(matrix[row][col])
        }
        if (set.size !== matrix.length) return false
    }

    return true
}

matrix1 = [[1,1,1],[1,2,3],[1,2,3]]

console.log(checkValid(matrix1))