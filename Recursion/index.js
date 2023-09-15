// function printFun(test) {
//     if (test < 1) return;

//     else {
//         console.log(test + " ");
//         printFun(test - 1);
//         console.log(test + " ");
//         return;
//     }
// }
// let test = 4;
// printFun(test);



// function fib(n) {

//     if (n == 0) return 0;
//     if (n == 1 || n == 2) return 1;
//     else
//         return fib(n - 1) + fib(n - 2);
// }
// let n = 5;
// console.log("Fibonacci Series of Numbers is : ");

// for (let i = 0; i < n; i++) {
//     console.log(fib(i));
// }





// function fact(n) {

//     if (n == 0 || n == 1) return 1;

//     else
//         return n * fact(n - 1);
// }
// let n = 5;
// console.log("Factorial of " + n + " is : " + fact(n));





// function towerOfHanoi(n, from_rod, to_rod, aux_rod) {

//     if (n == 0) return;

//     towerOfHanoi(n - 1, from_rod, aux_rod, to_rod);
//     console.log("Move Disk " + n + " from rod " + from_rod + " to rod " + to_rod);
//     towerOfHanoi(n - 1, aux_rod, to_rod, from_rod);
// }
// let N = 3;

// towerOfHanoi(N, "A", "B", "C");







// function printNos(n) {
//     if (n > 0) {
//         printNos(n - 1);
//         console.log(n);
//     }
//     return;
// }
// let n = 20;
// printNos(n);





function printNos(n) {
    if (n > 0) {
        console.log(n);
        printNos(n - 1);
    }
    return;
}

var n = 10;
printNos(n);