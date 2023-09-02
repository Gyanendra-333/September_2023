// function printTwoElements(arr) {
//     const n = arr.length;
//     const temp = Array(n).fill(0); // Creating temp array of size n with initial values as 0.
//     let repeatingNumber = -1;
//     let missingNumber = -1;

//     for (let i = 0; i < n; i++) {
//         temp[arr[i] - 1]++;
//         if (temp[arr[i] - 1] > 1) {
//             repeatingNumber = arr[i];
//         }
//     }
//     for (let i = 0; i < n; i++) {
//         if (temp[i] === 0) {
//             missingNumber = i + 1;
//             break;
//         }
//     }

//     console.log(`The repeating number is ${repeatingNumber}.`);
//     console.log(`The missing number is ${missingNumber}.`);
// }

// const arr = [8, 3, 4, 5, 5, 6, 2];
// printTwoElements(arr);




