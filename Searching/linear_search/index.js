// function findElement(arr, n, x) {

//     for (let i = 0; i < n; i++) {
//         if (arr[i] == x) return i;
//     }
//     return -1;
// }
// let arr = [20, 12, 23, 3, 31, 30];
// let n = arr.length;
// let x = 31;

// let result = findElement(arr, n, x);

// (result == -1) ? console.log("Element is not Present in this Array") : console.log("Element Present in this Array : " + result);







// function findElement(arr, n, x) {

//     for (let i = 0; i < n; i++) {
//         if (arr[i] == x) return i;
//     }
//     return -1;
// }
// let arr = [24, 34, 2, 34, 43, 54, 23, 4, 66, , 8];
// let n = arr.length;
// let x = 4;

// let result = findElement(arr, n, x);

// (result == -1) ? console.log("Not Found") : console.log("Element Index is = " + result);







function binarySearch(arr, x) {

    let low = 0;
    let high = arr.length - 1;
    let mid;

    while (high >= low) {
        mid = low + Math.floor((high - low) / 2);

        if (arr[mid] == x) return mid;

        if (arr[mid] > x)
            high = mid - 1;

        else low = mid + 1;
    }
    return -1;
}
let arr = [2, 4, 6, 7, 9, 10, 12, 14];
let x = 14;
let result = binarySearch(arr, x);

(result == -1) ? console.log("Not Found") : console.log("Element Present in Index : " + result);