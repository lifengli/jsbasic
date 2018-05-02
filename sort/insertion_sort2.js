//worst case: O(N^2), best case O(N)
const insertionSort = (array) => {
    //start from 2nd place, then move to the right
    for(let index = 1; index < array.length; index++){
        //current index value, to be inserted into the "new sorted array", on right-most position
        let value = array[index];
        //inner loop start from 1 spot to the left of to-be-inserted value
        let i = index - 1;
        //compare index value to the to-be-inserted value, until the first index or when equals or larger than it
        for(; i >=0 && array[i] > value; i--){
            //swap if to-be-inserted value is less the index value to is left
            array[i+1] = array[i];
        }
        // i stops at either -1, or the (index - 1) a value that is equal or bigger than the to-be-inserted value
        // drop the "value" at that position
        array[i+1] = value;
    }
};
