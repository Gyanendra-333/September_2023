// Simple JavaScript program to find the pair with sum closest to a given number.

// Function to find the pair with sum closest to x

function printClosest(arr, n, x) {
    let res_l, res_r;     // To store indexes of result pair

    // Variable to store current minimum difference
    let temp = Number.MAX_SAFE_INTEGER;

    // Iterating over array
    for (let i = 0; i < n - 1; i++) {
        for (let j = i + 1; j < n; j++) {

            // If found more closest pair
            if (Math.abs(arr[i] + arr[j] - x) < temp) {
                res_l = i;
                res_r = j;
                temp = Math.abs(arr[i] + arr[j] - x);
            }
        }
    }

    console.log("The closest pair is " + arr[res_l] + " and " + arr[res_r]);
}

let arr = [10, 22, 28, 29, 30, 40];
let x = 54;
let n = arr.length;
printClosest(arr, n, x);

