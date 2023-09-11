// A function to check if a string str is palindrome
// in the range L to R

function isPalindrome(str, L, R) {

    // Keep comparing characters while they are same
    while (R > L) {
        if (str[L++] !== str[R--]) {
            return false;
        }
    }
    return true;
}

const str = "abaaabaaaba";
const n = str.length;

const queries = [
    [0, 10],
    [5, 8],
    [2, 5],
    [5, 9],
];

for (let q of queries) {
    let result = isPalindrome(str, q[0], q[1]);

    if (result) {
        console.log(`The substring [${q[0]},${q[1]}] is a palindrome`);
    }
    else {
        console.log(`The substring [${q[0]},${q[1]}] is not palindrome`);
    }
}