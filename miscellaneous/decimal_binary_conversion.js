let binary = [];
let decimal = 273;

//convert decimal to binary
//O(log N) - similar to binary search
const d2b = (decimal) => {
    if(decimal > 1){
        if(decimal % 2 === 1){
            binary.push(1);
            d2b((decimal-1)/2);
        } else {
            binary.push(0);
            d2b(decimal/2);
        }
    } else {
        binary.push(decimal);
    }
};
d2b(decimal);
binary = binary.reverse().join("");

//convert binary to decimal
//O(N) - directly related to the length of the number
const b2d = (binary) => {
    decimal = 0;
    const bi = binary.toString();
    
    for(let i=0; i<bi.length; i++){
        decimal += bi[i] * Math.pow(2, bi.length-i-1);
    }
};

b2d(binary);
