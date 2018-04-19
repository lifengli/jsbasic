// O(N) n is the position, start at 1, (not index) in the sequence
const fibonacci = ( n ) => {
    if (n < 2) { return 1; }
    
    let f = [0, 1];
    // linear time complexity: for n elements it will require n-1 iterations
    // this is a better solution compared to the recursive calls below
    for ( let i = 2; i < n; i++) {
        f[i] = f[i-1] + f[i-2];
    }
    return f.pop();
};

// O(2^N)
// exponential time complexity: for n elements it will require nearly 2~n recursions
// the exact recursion = 2 * the calculated Fibonacci value
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
const fibonacci3 = (a, b, n) => { 
    if(n > 3) { 
        return fibonacci3(b, a + b, n - 1); 
    }
    else {
        return a + b; 
    }
};

// O(N) the es6 way
const fibonacci4 = (n) => {
    let first = 0, second = 1;
    while(n-- > 2){
        [first, second] = [second, first + second];
    }
    return second;
};
