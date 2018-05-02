// O(N) iterative, linear time complexity
const ifactorial = (n) => {
    let result = 1;
    for (let i=1; i<=n; i++) {
        result = result * i;
    }

    return result;
};

// O(N) recursive, linear time complexity
const rfactorial = (n) => {
    if ( n === 0) {
        return 1;
    }
    
    return n * rfactorial(n -1);
};

// O(N) accumulative, avoid exceed call stack for large n
const afactorial = (n, accumulate = 1) => {
    if(n < 2){
        return accumulate;
    }
   
    return afactorial(n - 1, n * accumulate);
};
