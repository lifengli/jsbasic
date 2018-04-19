const str = "abcbaxytattarrattatbayxabcdefgh i hgfedcba";

//this is hackerbamboo's code
//most elegant solution to this problem
const findstr = (str) => {
    let list = str.split('');
    let left = 0; 
    let right = 0;
    let start = 0;
    let max = Number.MIN_VALUE;
    
    //O(N)
    //for loop iterations: 2 * list.length === list.length / 0.5
    //plus the while loop iterations
    //start from index 0, compares to the next 2 chars -> 1 and 2
    //OR start from index i, compares to i+1 and i+2
    //Palindromic definition => "xx" OR "xyx"
    //either the char to its right is the same or the char adjacent to the right char is the same
    for(let i = 0; i < list.length; i = i + 0.5){
        //when i is x.5, right-left -> 1
        //when i is integer, right-left -> 2
        left = Math.ceil(i - 1);
        right = Math.floor(i + 1);

        //first 1 and last 2 indices will not run
        //O(N)
        //once found this pattern, expand search in both directions in the while loop
        //compare the char to the left of "list[left]" with the char to the right of "list[right]"
        //until reach to either end of the list, or a none equal happend
        while(left >= 0 && right < list.length) {
            if (list[left] === list[right]){
                left--;
                right++;
            } else { break;}
        }
        
        //right - left should >= 2 (left--, right++)
        //meaning at least on pair of equal found, otherwise nothing will be recorded
        //by updating max, only the index of longer sub-string will be recorded
        //in case right(1)-left(-1) === 2, there is no "xx" or "xyx" pattern found
        //it will return the first char
        if (right - left - 1 > max){
            max = right - left - 1; //(-1 => right++), this is the end position
            start = left + 1; //(+1 => left--)
        }
    }

    return str.slice(start, start + max);            
};

findstr(str);
