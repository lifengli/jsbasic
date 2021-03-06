const obj = {"q":9, "i":4 ,"a":7,"z":2,"w":15,"s":10,"x":0,"e":12,"d":24,"A":11 ,"c":5,"r":37};
    
// O(log n)
const quickSort = ( list ) => {
   // if there is only on item left, then it's done and return it to caller
   if ( list.length < 2) return list;
   
   let left = [];
   let pivot = list[0];
   let right = [];
   
   // this algorithm is Cesar code
   // each loop will break the [] into 2
   // if there are N items, it will take -> log2 N iterations
   for (let i = 1, total = list.length; i < total; i++) {
     switch ( true ) {
       case list[i] < pivot:
         left.push(list[i]);
       break;
       case list[i] >= pivot:
         if (list[i]) { right.push(list[i]); }
       break;
     }
   }
    
   // left and right are both [] and will go through the loop as long as they contain more than 1 items
   // each loop will yield another set of "left, pivot, and right"
   // each of them goes through the loop until it gets down to a single item
   // the result (1 item array) will return to its caller: the yielded list (left or right) before current loop
   // each result will be concatenated and finally the whole [] will be put back together in sorted order
   return [].concat(quickSort(left), pivot, quickSort(right));
   // to reverse the order to [z - a], just swap the left and right in return statement
};
    
const sortObj = (obj) => {
   let o = {};
   let s = quickSort(Object.keys(obj));
   
   for (let i = 0; i < s.length; i++) {
   o[s[i]] = obj[s[i]];
   }
   
   return o;
};

sortObj(obj);
