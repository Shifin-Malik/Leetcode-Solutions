function minimumOperations(nums: number[]): number {
    let c = 0;
    for(let num of nums){
        if(num % 3 !== 0){
            c++
        };
    };
    return c;
};