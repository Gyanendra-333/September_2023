
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




