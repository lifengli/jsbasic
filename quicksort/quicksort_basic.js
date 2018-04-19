const swap = (array, firstIndex, secondIndex) => {
    let temp = array[firstIndex];
    array[firstIndex] = array[secondIndex];
    array[secondIndex] = temp;
};

//O(n log N)
const partition = (array, start, end) => {
    //initialize pivot with the smallest index in sub-array
    let pivot = start;
    for(let idx = start; idx < end; idx++){
        //if current item at idx is less than or equal to the last item, swap(array[idx], array[pivot])
        //regardless the current value at index [pivot], move pivot to the right by 1 index
        if(array[idx] <= array[end]){
            swap(array, idx, pivot);
            pivot++;
        }
    }
    //once full array has been scanned, swap(array[end], array[pivot])
    //the index of pivot did not change, but the value (array[end]) will be in the split position
    //left[] <= array[pivot] < right[]
    swap(array, end, pivot);

    return pivot;
}

//worst case: always has the most unbalanced partitions -> one part is 0
//worst run time: O(N^2)
//best case: always has the most evenly balanced partitions -> the diff <= 1
//best case run time: O(log N)
//average case run time: O(n log N)
const quickSort = (array, start, end) => {
    if(start < end){
        let pivot = partition(array, start, end);
        //exclude pivot when recursing
        quickSort(array, start, pivot-1);
        quickSort(array, pivot+1, end);
    }
};

const array = [9, 7, 5, -11, 12, 0, 2, 14, 3, 10, 6, 8];
//const array = ["d", "D", "h", "H", "Q", "q"];
quickSort(array, 0, array.length-1);
