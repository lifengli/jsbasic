const reverseInt32 = (x) => {
    let y = 0;
    let neg = false;
    //preserve the sign
    if(x < 0){
        x = -x;
        neg = true;
    }
    //x must be a decimal, or the base 10 should change
    for(; x !== 0; x = Math.floor(x/10)){
        //shift y one decimal point to the left
        y *= 10;
        //y concatenates the last digit in x to its right
        y += x%10;
    }

    //check overflow
    if(y > Math.pow(2,31)) return 0;
    //return signed integer
    return neg ? -y : y;
}

reverseInt32(214748364);
reverseInt32(-214748364);
//over the limit of 2^31 will be 0
reverseInt32(2147483648);
