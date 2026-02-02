var missingNumber = function(nums) {
   let n = nums.length; 
   let actSum = nums.reduce((a,b) => a + b, 0)
   let n1 = []
   for(let i = 0; i <= n; i++){
       n1.push(i)
   }
   
   let sum = n1.reduce((a, b) => a + b, 0);
   return sum - actSum
   
};