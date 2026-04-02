var missingNumber = function(nums) {
  let sort = nums.sort((a,b) => a - b, 0);
  for(let i = 0; i < sort.length;i++){
    if(sort[i] !== i){
        return i
    }
  };
  return sort.length
};