let list = [];  //search list
const x = 2300; //value to search for
for (let i=0; i<2500; i++){
    list.push(i);
}

//O(log N)
const binarysearch = (list, x) => {
    let l = 0;  //start at index 0
    let h = list.length;  //high point, length of the search list
   
    //to get an idea, the number of iterations needed to find the match => log2 2300
    //e.g. to find 199, use 2499-199 to calculate => log2 2300: they have the same distance from middle.
    while (l < h) {
        let m = l + parseInt((h-l)/2); //if odd number, set to middle; even number, set to 1 index to the right
        
        switch (true) {
            case list[m] > x:
                h = m; 
            break;
            case list[m] < x:
                l = m + 1; 
            break;
            default:
                return m;
            break;
        }
    }

    return -1;
};

binarysearch(list, x);
