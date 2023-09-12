// JavaScript program to find minimum number of
// reversals required to balance an expression

// Returns count of minimum reversals for making
// expr balanced. Returns -1 if expr cannot be
// balanced


function countMinReversals(expr) {
    let len = expr.length;

    // Expressions of odd lengths
    // cannot be balanced
    if (len % 2)
        return -1;

    // After this loop, stack contains unbalanced
    // part of expression, i.e., expression of the
    // form "}}..}{{..{"
    var s = new Array();
    for (let i = 0; i < len; i++) {
        if (expr[i] == '}' && !s.length == 0) {
            if (s[s.length - 1] == '{')
                s.pop();
            else
                s.push(expr[i]);
        }
        else
            s.push(expr[i]);
    }

    // Length of the reduced expression
    // red_len = (m+n)
    let red_len = s.length;

    // count opening brackets at the end of
    // stack
    let n = 0;
    while (!s.length == 0 && s[s.length - 1] == '{') {
        s.pop();
        n++;
    }

    // return ceil(m/2) + ceil(n/2) which is
    // actually equal to (m+n)/2 + n%2 when
    // m+n is even.
    return (red_len / 2 + n % 2);
}


let expr = "}}{{";
console.log(countMinReversals(expr));

