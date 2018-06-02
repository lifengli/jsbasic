const a1 = [0, 3, 4, 6, 10, 11, 15];
const a2 = [-1, 1, 5, 6, 8, 12, 14, 15, 19];

const mergeSortedArray = (a1, a2) => {
    const merged = [];
    
    let index0 = 0;
    let index1 = 0;
    let index2 = 0;
    
    //after merge, merged will have a length equals to the sum of a1.length and a2.length
    while(index0 < (a1.length + a2.length)){
        let a1out = index1 >= a1.length;
        let a2out = index2 >= a2.length;
        
        if( !a1out && ( a2out || a1[index1] < a2[index2] )){
            merged[index0] = a1[index1];
            index1++;
        } else {
            merged[index0] = a2[index2];
            index2++;
        }
        
        index0++;
    }
    
    return merged;
};

console.log(mergeSortedArray(a1, a2));
