//O(N^2)
//worst case: N^2 - 2N - C
const bubble = (list) => {
    if(list.length < 2){ return list;}

    for(let i=list.length-1; i>=0; i--){
        for(let j=1; j<=i; j++){
            if(list[j-1] > list[j]){
                let swap = list[j];
                list[j] = list[j-1];
                list[j-1] = swap;
            }
        }
    }
    
    return list;
};

const list = [7,5,0,2,4,-8,3,9];

bubble(list);
