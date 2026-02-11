/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function(nums) {
   if(nums.length === 0) return 0;

   let count = 1;
   let max = 1;

   for(let i = 1; i < nums.length; i++){
    if(nums[i] > nums[i - 1]){
        count++;
        max = Math.max(max, count)
    } else {
        count = 1;
    }
   } ;
   return max;
};