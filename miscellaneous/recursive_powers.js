const x = 5;
const n = 4;

//O(N): in most cases it iterates (far) less than n times
const power = (x, n) => {
    // base case
    if(n === 0){
        return 1;
    }
    // recursive case: n is negative 
    if(n < 0){
        return 1 / power(x,-n);
    }
    // recursive case: n is odd
    if(n % 2 === 1){
        return x * power(x, n-1);
    }
    // recursive case: n is even
    if(n % 2 === 0){
        let i = power(x, n/2);
        return i * i;
    }
};

power(x, n);
