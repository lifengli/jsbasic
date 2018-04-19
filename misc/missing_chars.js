let missing = [];
const s = "abcdefghijklmnopqrstuvwxyz";

//O(N)
const mc = (c) => {
    let a = s.indexOf(c[0]);
    let b = s.indexOf(c[c.length-1]);
    let ss = s.slice(a,b+1);
    
    for(let i=0; i<ss.length; i++){
        if(c.indexOf(ss[i]) < 0){
            missing.push(ss[i]);
        }
    }
    
    return missing.length === 0 ? "no missing chars" : missing.join("");
};

mc("eil");
