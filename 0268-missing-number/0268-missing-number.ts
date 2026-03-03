function missingNumber(nums: number[]): number {
    let sort:number[] = nums.sort((a,b) => a - b);
    for(let i: number = 0; i < sort.length;i++){
        if(sort[i] !== i){
            return i
        };
    };
    return sort.length
};