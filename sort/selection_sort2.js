let array = [22, 11, 0, 99, 1, 88, -2, 7, 42, 1, "c", "z", "A", "h3"];

//O(N^2)
const selectionSort = (array) => {
    for(let i = 0; i < array.length; i++) {
        let minIndex = i;
        
        //always find the smallest value in the sub-array (starting form i+1)
        for(let j = minIndex+1; j < array.length; j++){
          if(array[j] < array[minIndex]){
            minIndex = j;
          }
        }

        //swap the values between current position and the smallest
        let temp = array[i];
        array[i] = array[minIndex];
        array[minIndex] = temp;
    }
};

selectionSort(array);
console.log(array);
