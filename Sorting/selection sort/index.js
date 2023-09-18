// function swap(arr, xp, yp) {
//     let temp = arr[xp];
//     arr[xp] = arr[yp];
//     arr[yp] = temp;
// }
// function selectionSort(arr, n) {

//     let i, j, min_idx;

//     for (let i = 0; i < n - 1; i++) {
//         min_idx = i;

//         for (let j = i + 1; j < n; j++) {
//             if (arr[j] < arr[min_idx])
//                 min_idx = j;

//         }
//         swap(arr, min_idx, i);
//     }
// }
// function printArray(arr, size) {
//     let i;

//     for (let i = 0; i < size; i++) {
//         console.log(arr[i] + " ");
//     }
// }
// let arr = [64, 25, 12, 22, 11,];
// let n = arr.length;

// selectionSort(arr, n);
// console.log("sorted Array : ");
// printArray(arr, n);







// function bubbleSort(arr, n) {

//     let temp, swapped;

//     for (let i = 0; i < n - 1; i++) {
//         swapped = false;

//         for (let j = 0; j < n - i - 1; j++) {
//             if (arr[j] > arr[j + 1]) {

//                 temp = arr[j];
//                 arr[j] = arr[j + 1];
//                 arr[j + 1] = temp;
//                 swapped = true;
//             }
//         }
//         if (swapped == false)
//             break;
//     }
// }
// function printArray(arr, size) {
//     for (let i = 0; i < size; i++)
//         console.log(arr[i]);
// }
// let arr = [64, 34, 25, 12, 22, 11, 90];
// let n = arr.length;

// bubbleSort(arr, n);
// console.log("Sorted Array : ");
// printArray(arr, n);







// function insertionSort(arr, n) {

//     let key;
//     for (let i = 1; i < n; i++) {
//         key = arr[i];
//         j = i - 1;

//         while (j >= 0 && arr[j] > key) {
//             arr[j + 1] = arr[j];
//             j = j - 1;
//         }
//         arr[j + 1] = key;
//     }
// }
// function printArray(arr, n) {

//     for (let i = 0; i < n; i++)
//         console.log(arr[i]);
// }
// let arr = [12, 11, 13, 5, 6];
// let n = arr.length;

// insertionSort(arr, n);
// printArray(arr, n);






// function merge(arr, l, m, r) {
//     let n1 = m - l + 1;
//     let n2 = r - m;

//     let L = new Array(n1);
//     let R = new Array(n2);

//     for (let i = 0; i < n1; i++)
//         L[i] = arr[l + i];

//     for (let j = 0; j < n2; j++)
//         R[j] = arr[m + l + j];

//     let i = 0;
//     let j = 0;
//     let k = l;

//     while (i < n1 && j < n2) {
//         if (L[i] <= R[j]) {
//             arr[k] = L[i];
//             i++;
//         }
//         else {
//             arr[k] = R[j];
//             j++;
//         }
//         k++;
//     }
//     while (i < n1) {
//         arr[k] = L[i];
//         i++;
//         k++;
//     }
//     while (j < n2) {
//         arr[k] = R[j];
//         j++;
//         k++;
//     }
// }
// function mergeSort(arr, l, r) {
//     if (l >= r) {
//         return;
//     }
//     let m = l + parseInt((r - l) / 2);
//     mergeSort(arr, l, m);
//     mergeSort(arr, m + l, r);
//     merge(arr, l, m, r);
// }
// function printArray(A, size) {
//     for (let i = 0; i < size; i++)
//         console.log(A[i] + " ");
// }

// var arr = [12, 11, 13, 5, 6, 7];
// var arr_size = arr.length;

// console.log("Given array is ");
// printArray(arr, arr_size);

// mergeSort(arr, 0, arr_size - 1);

// console.log("Sorted array is ");
// printArray(arr, arr_size);