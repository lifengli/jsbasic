let a = [32, 20, 3, 74, 02, -9, 87, 18, 0, 65, 9];
let b = [3, 7, -1, 12, 14, 0, 2, 6, 9, -10, 11];

//initially it will be called when the sub-arraies' size down to 1
//so at first it only need to compare 2 single values
//then the sub-arraies' size will increase by 1 at each step after merge
//then it will need to compare the values between 2 sub-arraies by index order
//this is O(N) since it only need to calculate the value once
const merge = (array, start, mid, end) => {
    let left = [];
    let right = [];
    
    let i; //left array
    let j; //right array
    let k = start; //the place to override in original array
    
    //populate the left sub-array from the first halve of array param
    for (i = 0; k <= mid; i++, k++) {
        left[i] = array[k];
    }
    //populate the right sub-array from the second halve of array param
    for (j = 0; k <= end; j++, k++) {
        right[j] = array[k];
    }
    
    //reset
    i = 0;
    j = 0;
    k = start;
    
    //compare values between 2 sub-arraies by index order
    //putting smaller one back into array, by override existing value there
    while(i < left.length && j < right.length){
        if(left[i] < right[j]){
            array[k] = left[i];
            i++;
        } else {
            array[k] = right[j];
            j++;
        }
        k++;
    }
    
    //once either left or right has been fully copied: i === left.length || j === right.length
    //copy the remaining elements from the other array back into the original array
    while(i < left.length){
        array[k] = left[i];
        i++;
        k++;
    }
    while(j < right.length){
        array[k] = right[j];
        j++;
        k++;
    }
};

//the whole picture is essentially a tree
//root -> the original array, size n
//then divided into 2 at next level, n/2
//then each node divided into 2 again, n/2/2 -> n/2^n
//for total n elements in the original array, there will be log2(n) levels --- {log2(n+1)}
//from merge, we know it takes O(N) to run at each level
//so the combined time complexity = n(logN)
const mergeSort = (array, start, end) => {
    if(start < end) {
        let mid = Math.floor((start+end)/2);
        mergeSort(array, start, mid);
        mergeSort(array, mid+1, end);
        merge(array, start, mid, end);
    }
};

mergeSort(a, 0, a.length-1);
mergeSort(b, 0, b.length-1);
