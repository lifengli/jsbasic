const nums = [2, 4, 7, 11, 15, 18, 22, 25, 29, 32, 36, 40, 45, 50, 100];
const target = 150;

//O(N)
const twoSum = (nums, target) => {
    const temp = [];
    //run through the array only once, worst case nums.length
    for(let i=0; i<nums.length; i++){
        if(temp.indexOf(target-nums[i] < 0)){
            temp.push(target-nums[i]);
        }
        if(temp.indexOf(nums[i]) >= 0){
            if(nums.indexOf(target - nums[i]) === i) continue;
            return [nums.indexOf(target - nums[i]), i];
        }
    }
    return false;
};

//O(N) - better
const twoSum1 = (list, target) => {
    const checker = new Set();

    for(let i = 0; i < list.length; i++){
        const one = list[i];
        const match = target - one;

        if(checker.has(match)){
	    return [list.indexOf(match), i];
	}

        checker.add(one);
    }

    return false;
};

//O(N^2) - don't do this
const twoSum2 = (nums, target) => {
    //run through the array once, worst case nums.length
    for(let i=0; i<nums.length; i++){
        //worst case: run through (n-1)+(n-2)+(n-3)+...+1 times
        for(let j=i+1; j<nums.length; j++){
            if(nums[i] + nums[j] === target){
                return [i,j];
            }
        }
    }
    return false;
};

twoSum(nums, target);
