//const list = [5, 2, 7, 9, 0, 4, 1];
const list = ['l', 'a', 'n', 'd', 'e', 'd', ' ', 'h', 'a', 's', ' ', 'e', 'a', 'g', 'l', 'e', ' ', 't', 'h', 'e'];

// O(N) linear time complexity
const reverseChar = ( a ) => {
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

reverseChar(list);

// O(N) reverse words
const reverse2 = ( a, left, right ) => {
  if(a.length < 2) return a;

  while(left < right){
    const swap = a[left];
    a[left] = a[right];
    a[right] = swap;

    left++;
    right--;
  }
};

const reverseWords = ( w ) => {
  reverse2(w, 0, w.length - 1);

  let wordStartIndex = 0;

  for(let i = 0; i <= w.length; i++){
    if(i === w.length || w[i] === ' '){
      reverse2(w, wordStartIndex, i - 1);
      wordStartIndex = i + 1;
    }
  }
};

reverseWords(list);
