let array = [22, 11, 0, 99, 1, 88, -2, 7, 42, 1, "c", "z", "A", "h3"];

//O(N) it always runs these lines of code whenever being called
const swap = (array, firstIndex, secondIndex) => {
    let temp = array[firstIndex];
    array[firstIndex] = array[secondIndex];
    array[secondIndex] = temp;
};

//O(N^2)
const indexOfMinimum = (array, startIndex) => {
    let minValue = array[startIndex];
    let minIndex = startIndex;

    //it will run -> n+(n-1)+(n-2)+...+1 times
    //n=array.length; number of iterations => n^2/2 + n/2
    for(let i = minIndex + 1; i < array.length; i++) {
        if(array[i] < minValue) {
            minIndex = i;
            minValue = array[i];
        }
    } 
    return minIndex;
}; 

//O(N) it loop through the list one time, linear
const selectionSort = (array) => {
    let minIndex = 0;
    for(let i = 0; i< array.length; i++) {
        minIndex = indexOfMinimum(array, i);
        swap(array, i, minIndex);
    }
};

//O(N^2) is the most significant term
//Array size grew 10 times, the running time will increase 100 times
//Array size grew 10*10 times, the running time will increase 100*100 times, and so on...
selectionSort(array);
