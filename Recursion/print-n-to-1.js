// Javascript code for print numbers from 
// N to 1 without using loop

// Prints numbers from N to 1
function printNos(n) {
    if (n > 0) {
        console.log(n + " ");
        printNos(n - 1);
    }
    return;
}

var n = 10;
printNos(n);