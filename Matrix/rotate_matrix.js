// Javascript program for left rotation of matrix by 180


let R = 4
let C = 4

// Function to rotate the matrix by 180 degree
function reverseColumns(arr) {
    for (let i = 0; i < C; i++)
        for (let j = 0, k = C - 1; j < k; j++, k--) {
            let x = arr[j][i];
            arr[j][i] = arr[k][i];
            arr[k][i] = x;
        }

}

// Function for transpose of matrix
function transpose(arr) {
    for (let i = 0; i < R; i++)
        for (let j = i; j < C; j++) {
            let x = arr[j][i];
            arr[j][i] = arr[i][j];
            arr[i][j] = x;
        }
}

// Function for display the matrix
function printMatrix(arr) {
    console.log(arr);
}

// Function to anticlockwise rotate matrix
// by 180 degree
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
