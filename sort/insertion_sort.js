//O(N^2)
const insert = (array, rightIndex, value) => {
    let i;
    //O(N^2)
    // worst case: if every item has to shift, from index[0] -> index[1], all the way up to index[n-1]
    // (1+2+..+(n-1)) => constant * (n^2 - n/2)
    //O(N)
    // best case: if no items need to shift, meaning already sorted
    // (1+1+1+....+1) => constant * (n - 1)
    for(i = rightIndex; i >= 0 && array[i] > value; i--){
        array[i+1] = array[i];
    }
    array[i+1] = value;
};

const insertionSort = (array) => {
    //this is constant, looping through the array once
    //n -> array.length
    for(let i = 1; i < array.length; i++){
        insert(array, i - 1, array[i]);
    }
};

let array = [22, 11, -5, 99, 88, 0, 9, 7, 42];
//let array = ["s", "g", "H", "u", "a", "n", "A", "d", "b"];

//to fix: it does not sort mixed numbers and characters
insertionSort(array);
