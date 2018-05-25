const list = [33, 0, 27, 24, -21, 18, 10, -26, -6];

const find2ndMax = (list) => {
  if(list.length < 2) return;
  
  let max = list[0];
  //O(N)
  //error handling: go over the list and make sure these two numbers are not the dup max!
  //caution: use plus instead of multiply to avoid two small negative numbers yield a large positive product
  let two = list[0] + list[1];
  
  for(let i=1; i<list.length; i++){
	const current = list[i];
	
	if(current === max){
	  continue;
	}

	two = Math.max(two, current + max);
	max = Math.max(max, current);
  }

  return two - max;
};
console.log(find2ndMax(list));

//use diff
const find2ndMax2 = (list) => {
  if(list.length < 2) return;
  
  let max = list[0];
  //same comments as above
  let diff = list[0] - list[1];
  
  for(let i=1; i<list.length; i++){
	const current = list[i];
	
	if(current === max){
	  continue;
	}
	
	diff = Math.min(diff, max - current);
	max = Math.max(max, current);
  }
  
  return max - diff;
}
console.log(find2ndMax2(list));
