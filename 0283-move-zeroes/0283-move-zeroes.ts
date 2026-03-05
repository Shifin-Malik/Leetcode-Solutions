
function moveZeroes(nums: number[]): void {
   let nonZero : number = 0;
   for(let i : number = 0; i < nums.length; i++){
    if(nums[i] !== 0){
        [nums[i], nums[nonZero]] = [nums[nonZero], nums[i]]
        nonZero++
    }
   }
};