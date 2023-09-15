// Javascript code for print numbers from
// 1 to n without using loop

// Prints numbers from 1 to n

function printNos(n) {
    if (n > 0) {
        printNos(n - 1);
        console.log(n + " ");
    }
    return;
}

var n = 10;
printNos(n);