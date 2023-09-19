function findElement(arr, n, x) {

    for (let i = 0; i < n; i++) {
        if (arr[i] == x) return i;
    }
    return -1;
}
let arr = [20, 12, 23, 3, 31, 30];
let n = arr.length;
let x = 31;

let result = findElement(arr, n, x);

(result == -1) ? console.log("Element is not Present in this Array") : console.log("Element Present in this Array : " + result);