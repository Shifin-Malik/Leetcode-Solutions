
var findMissingElements = function(nums) {
   let max = Math.max(...nums);
   let min = Math.min(...nums);
   let sort = nums.sort((a,b) => a - b)
   let arr = []
   for(let i = min; i <= max; i++){
       arr.push(i)
   };
   
   let res = arr.filter((item) => !sort.includes(item));
   
   return res;
};

