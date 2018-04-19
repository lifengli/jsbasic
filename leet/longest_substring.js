const str = "abcaddabxcbb";
//const str = "abcdabcdefga";
//const str = "aaa";

let s = "";
let start = 0;
let swap = "";

// O(N) -> Linear Time complexity
const findstr = (str) => {
    for (let i = 0; i < str.length; i++) {
        //start from index 0 and keep moving right
        swap += str[i];

        //compare next value with values in the "left sub-string"
        //if find one duplicate, then save the left sub-string and move the index to the first duplicated item + 1
        //if find another duplicate, compare the length of current sub-string(from the starting index to current index) to the saved sub-string
        //replace the saved sub-string if new sub-string is longer, then move the starting index to the new dup + 1 position
        //continue until the end of string, return either the last sub-string, or the saved one, whichever is longer
        if(str[i+1] && swap.indexOf(str[i+1]) >= 0){
            if(swap.length > s.length){
                s = swap;
            }
            start = swap.indexOf(str[i+1]) + 1;
            swap = swap.substr(start, i);
        }
    }
    return swap.length > s.length ? swap : s;
};

findstr(str);
