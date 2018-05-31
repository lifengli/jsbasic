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

// O(N)
const reverse2 = ( a ) => {
  if(a.length < 2) return a;

  let left = 0;
  let right = a.length -1;

  while(left < right){
    const swap = a[left];
    a[left] = a[right];
    a[right] = swap;

    left++;
    right--;
  }
};

reverse2(list);
