
var singleNumber = function(nums) {
   let one = 0;
   let two = 0;

   for(let x of nums){
    one ^= x & ~two
    two ^= x & ~one
   };
    return one
};