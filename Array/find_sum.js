function max(x, y) {
    return (x > y) ? x : y;
}
function maxPathSum(ar1, ar2, m, n) {
    let i = 0; j = 0;
    let result = 0, sum1 = 0, sum2 = 0;

    while (i < m && j < n) {
        if (ar1[i] < ar2[j])
            sum1 += ar1[i++];

        else if (ar1[i] > ar2[j])
            sum2 += ar2[j++];

        else {
            result += Math.max(sum1, sum2) + ar1[i];

            sum1 = 0;
            sum2 = 0;
            i++;
            j++;
        }
    }
    while (i < m)
        sum1 += ar1[i++];

    while (j < n)
        sum2 += ar2[j++];

    result += Math.max(sum1, sum2);
    return result;
}
let ar1 = [2, 3, 7, 5];
let ar2 = [1, 5, 7, 9];
let m = ar1.length;
let n = ar2.length;

let finalSum = maxPathSum(ar1, ar2, m, n);

console.log("Maximum sum path is " + finalSum);