const list = [5, 2, 7, 9, 0, 4, 1];
//const list = ['g', 'p', 'a', 'i', 'o', 'c'];

// O(N) linear time complexity
const reverse = ( a ) => {
    if ( a.length < 2 ) return a;

    for (let i = 0, j = a.length - 1; i < a.length; i++) {
        if (j >= i) {
           let swap = a[i];
           a[i] = a[j];
           a[j] = swap;
           j--;
        }
    }
    return a;
};

reverse(list);
