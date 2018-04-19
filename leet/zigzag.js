const zigzagConvert = (str, n) => {
    //validation
    if(n < 2 || str.length <= n){
        return str;
    }
    
    let zigzag = "";
    const array = [];
    //generate interim container based on n
    for(let a = 0; a < n; a++){
        array[a] = [];
    }

    let i = 0;
    let j = 0;
    //O(N) - linear to str length
    while(j < str.length) {
        //loop incrementally based on n
        for(j = i+n; i < j; i++){
            let x = (i+n)%(j);
            array[x].push(str[i]);
        }
        //zigzag: the item right after (c -> const), c*n, will be placed on the zigzag position
        if(str[i]){
            array[parseInt(n/2)].push(str[i]);
        }
        //add 1 to by pass the zigzag point and go into next loop
        i += 1;
    }

    //resemble
    for(let z = 0; z < array.length; z++){
        zigzag += array[z].join("");
    }

    return zigzag;
}

const n = 3;
const s = "PAYPALISHIRINGXO";
zigzagConvert(s, n);
