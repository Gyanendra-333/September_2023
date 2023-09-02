function printTwoElements(arr) {
    const n = arr.length;
    const temp = Array(n).fill(0);
    let repeatingNumber = -1;
    let missingNumber = -1;

    for (let i = 0; i < n; i++) {
        temp[arr[i] - 1]++;
        if (temp[arr[i] - 1] > 1) {
            repeatingNumber = arr[i];
        }
        for (let i = 0; i < n; i++) {
            if (temp[i] === 0) {
                missingNumber = i + 1;
                break;
            }
        }
    }
    console.log(`The Repeating Number is ${repeatingNumber}.`);
    console.log(`The Missing Number is ${missingNumber}.`);
}
const arr = [8, 5, 3, 4, 2, 6, 6];
printTwoElements(arr);