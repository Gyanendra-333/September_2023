

let mat = [[1, 2, 3, 20], [5, 6, 20, 25], [1, 3, 5, 6], [6, 7, 8, 15]];

let max = 0;
let flag = 0;
for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < mat.length; j++) {
        if (max < mat[i][j]) {
            max = mat[i][j];
        }
    }
}

let b = new Array(max + 1).fill(0);
for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < mat.length; j++) {
        let y = mat[i][j];
        b[y]++;
    }
}

for (let i = 1; i <= max; i++) {
    if (b[i] == 1) {
        console.log(i + " ");
        flag = 1;
    }
}

if (!flag) {
    console.log("No unique element in the matrix");
}
