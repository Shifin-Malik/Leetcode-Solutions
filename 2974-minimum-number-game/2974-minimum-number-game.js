/**
 * @param {number[]} nums
 * @return {number[]}
 */
var numberGame = function(nums) {
    nums.sort((a,b) => a - b);
    let temp = 0
    for(let i = 0; i < nums.length; i+=2){
       temp = nums[i];
       nums[i] = nums[i+1];
       nums[i+1] = temp;
    };
    return nums
};
