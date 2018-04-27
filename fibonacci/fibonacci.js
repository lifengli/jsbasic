// O(N) n is the position, start at 1, (not index) in the sequence
const fibonacci = ( n ) => {
    if (n < 3) { return 1; }
    
    let f = [0, 1];
    // linear time complexity: for n elements it will require n-1 iterations
    // this is a better solution compared to the recursive calls below
    for ( let i = 2; i < n; i++) {
        f[i] = f[i-1] + f[i-2];
    }
    return f.pop();
};

// O(N^2)
// exponential time complexity: for n elements it will require nearly 2~n recursions
// the exact recursion = 2 * the calculated Fibonacci value
// if index start at 0, use if(n < 3)
const fibonacci2 = ( n ) => {
    if(n <= 3) {
        return 1;
    } else {
        return fibonacci2(n - 1) + fibonacci2(n - 2);
    }
};

// O(N)
// this essentially equivalent to a for loop
// linear time complexity: for n elements it will require n-1 iterations
// if index start at 0, use if(n >= 3)
const fibonacci3 = (a, b, n) => {
    if(n-- > 3) {
        return fibonacci3(b, a + b, n);
    }
    else {
        return a + b;
    }
};

// O(N) the es6 way
// if index start at 0, use (n-- >= 2)
const fibonacci4 = (n) => {
    let first = 0, second = 1;
    while(n-- >= 3){
        [first, second] = [second, first + second];
    }
    return second;
};

// O(N) use memorization
// if index start at 0, use if(n<3)
const fibonacci5 = (n, m={}) => {
    if(n <= 3) { return 1; }
    if(m[n]) { return m[n]; }
    let fib = fibonacci5(n-1, m) + fibonacci5(n-2, m);
    m[n] = fib;

    return fib;
};
