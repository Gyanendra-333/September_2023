// function isPalindrome(str, L, R) {

//     while (R > L) {

//         if (str[L++] !== str[R--]) {
//             return false;
//         }
//     }
//     return true;
// }
// const str = "abaaabaaaba";
// const n = str.length;

// const queries = [
//     [0, 10],
//     [5, 8],
//     [2, 5],
//     [5, 9]
// ];

// for (let q of queries) {
//     let result = isPalindrome(str, q[0], q[1]);

//     if (result) {
//         console.log(`The substring [${q[0]},${q[1]}] is a palindrome`);
//     } else {
//         console.log(`The substring [${q[0]},${q[1]}] is not palindrome`);
//     }
// }




// function countMinReversals(expr) {
//     let len = expr.length;

//     if (len % 2)
//         return -1;

//     let s = new Array();
//     for (let i = 0; i < len; i++) {
//         if (expr[i] == "}" && !s.length == 0) {
//             if (s[s.length - 1] == "{") s.pop();
//             else
//                 s.push(expr[i]);
//         }
//         else s.push(expr[i]);
//     }
//     let red_len = s.length;
//     let n = 0;
//     while (!s.length == 0 && s[s.length
//         - 1] == "{") {
//         s.pop();
//         n++;
//     }
//     return (red_len / 2 + n % 2);

// }
// let expr = "}}{{";
// console.log(countMinReversals(expr));








// function countMinReversals(expr) {
//     let len = expr.length;

//     if (len % 2)
//         return -1;

//     let s = new Array();
//     for (let i = 0; i < len; i++) {
//         if (expr[i] == "}" && !s.length == 0) {
//             if (s[s.length - 1] == "{") s.pop();
//             else
//                 s.push(expr[i]);
//         }
//         else s.push(expr[i]);
//     }
//     let red_len = s.length;
//     let n = 0;
//     while (!s.length == 0 && s[s.length
//         - 1] == "{") {
//         s.pop();
//         n++;
//     }
//     return (red_len / 2 + n % 2);

// }
// let expr = "}}{{";
// console.log(countMinReversals(expr));