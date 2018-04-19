const str1 = "abcdedcba";
//const str2 = "abcdefdcba";

const isPalindrome = function(str) {
    // base case #1
    if(str.length < 2){
        return true;
    }
    // base case #2
    if(str.slice(0, 1) !== str.slice(-1)){
        return false;
    }
    // recursive case
    return isPalindrome(str.slice(1, -1));
};

isPalindrome(str1);
