// javascript Program to print the Diagonals of a Matrix

function printPrincipalDiagonal(mat, n) {
    let s = "";
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {

            // Condition for principal diagonal
            if (i == j) {
                s += mat[i][j];
                s += " ";
            }
        }
    }
    console.log("Principal Diagonal: " + s);

}

// Function to print the Secondary Diagonal
function printSecondaryDiagonal(mat, n) {
    let s = "";
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {

            // Condition for secondary diagonal
            if ((i + j) == (n - 1)) {
                s += mat[i][j];
                s += " ";
            }
        }
    }
    console.log("Secondary Diagonal: " + s);

}


let n = 4;
let a = [[1, 2, 3, 4],
[5, 6, 7, 8],
[1, 2, 3, 4],
[5, 6, 7, 8]];

printPrincipalDiagonal(a, n);
printSecondaryDiagonal(a, n);
