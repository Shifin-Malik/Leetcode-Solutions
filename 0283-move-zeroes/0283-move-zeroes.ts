
function moveZeroes(nums: number[]): void {
   let nonZero : number = 0;
   let i : number = 0;
   for(i ; i < nums.length; i++){
    if(nums[i] !== 0){
        let temp = nums[i];
        nums[i] = nums[nonZero];
        nums[nonZero] = temp;
        nonZero++
    }
   }
};