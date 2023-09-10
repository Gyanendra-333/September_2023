
// let arr = [[1, 2, 3, 4],
// [5, 6, 7, 8],
// [9, 10, 11, 12]];

// for (let i = 0; i < 3; i++) {
//     let s = "";

//     for (let j = 0; j < 4; j++) {
//         s += (arr[i][j] + " ");
//     }
//     console.log(s);
// }





// function searchInMatrix(arr, x) {
//     let m = arr.length, n = arr[0].length;

//     for (let i = 0; i < m; i++) {
//         for (let j = 0; j < n; j++) {
//             if (arr[i][j] == x) return true;
//         }
//     }
//     return false;
// }
// let x = 5;
// let arr = [[1, 2, 3, 4],
// [5, 6, 7, 8],
// [9, 10, 11, 12]];

// if (searchInMatrix(arr, x)) {
//     console.log("Present Element");
// }
// else {
//     console.log("Not Presents Elements");
// }




// function printPrincipalDiagonal(mat, n) {

//     let s = "";
//     for (let i = 0; i < n; i++) {
//         for (let j = 0; j < n; j++) {

//             if (i == j) {
//                 s += mat[i][j];
//                 s += " ";
//             }
//         }
//     }
//     console.log("Principal Diagonal : " + s);
// }
// function printSecondaryDiagonal(mat, n) {

//     let s = "";
//     for (let i = 0; i < n; i++) {
//         for (let j = 0; j < n; j++) {

//             if ((i + j) == (n - 1)) {
//                 s += mat[i][j];
//                 s += " ";
//             }
//         }
//     }
//     console.log("Secondary Diagonal : " + s);
// }
// let n = 4;
// let a = [[1, 2, 3, 4],
// [5, 6, 7, 8],
// [1, 2, 3, 4],
// [5, 6, 7, 8]];

// printPrincipalDiagonal(a, n);
// printSecondaryDiagonal(a, n);




// function sortMat(mat, n) {

//     let temp = [];
//     let k = 0;

//     for (let i = 0; i < n; i++)
//         for (let j = 0; j < n; j++)
//             temp[k++] = mat[i][j];

//     temp.sort(function (a, b) { return b - a });

//     k = 0;
//     for (let i = 0; i < n; i++)
//         for (let j = 0; j < n; j++)
//             mat[i][j] = temp[k++];


// }
// function printMat(mat, n) {
//     for (let i = 0; i < n; i++) {
//         for (let j = 0; j < n; j++)
//             console.log(mat[i][j]);
//     }
// }

// let mat = [[5, 4, 7], [1, 3, 8], [2, 9, 6]];
// let n = 3;
// console.log("Original Matrix:\n");
// printMat(mat, n);
// sortMat(mat, n);
// console.log("\nMatrix After Sorting:\n");
// printMat(mat, n);






let R = 4;
let C = 4;

function reverseColumns(arr) {
    for (let i = 0; i < C; i++)
        for (let j = 0, k = C - 1; j < k; j++, k--) {
            let x = arr[j][i];
            arr[j][i] = arr[k][i];
            arr[k][i] = x;
        }

}
function transpose(arr) {
    for (let i = 0; i < R; i++)
        for (let j = i; j < C; j++) {
            let x = arr[j][i];
            arr[j][i] = arr[i][j];
            arr[i][j] = x;
        }
}
function printMatrix(arr) {
    console.log(arr);
}
function rotate180(arr) {
    transpose(arr);
    reverseColumns(arr);
    transpose(arr);
    reverseColumns(arr);
}
let arr = [[1, 2, 3, 4],
[5, 6, 7, 8],
[9, 10, 11, 12],
[13, 14, 15, 16]];
rotate180(arr);
printMatrix(arr);
