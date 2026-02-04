var runningSum = function(nums) {
 let sum = 0;
 let res = [];

 for(let i = 0; i < nums.length;i++){
    res.push(sum += nums[i])
 }
 return res;
};