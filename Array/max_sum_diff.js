
// JavaScript program for the above approach

/* For a given array arr[],
returns the maximum j – i such
that arr[j] > arr[i] */

function maxIndexDiff(arr, n) {
    let maxDiff = -1;
    let i, j;

    for (i = 0; i < n; ++i) {
        for (j = n - 1; j > i; --j) {
            if (arr[j] > arr[i] && maxDiff < (j - i))
                maxDiff = j - i;
        }
    }

    return maxDiff;
}

let arr = [9, 2, 3, 4, 8];
let n = arr.length;
let maxDiff = maxIndexDiff(arr, n);
console.log(maxDiff);
