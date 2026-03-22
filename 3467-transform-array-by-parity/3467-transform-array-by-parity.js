/**
 * @param {number[]} nums
 * @return {number[]}
 */
var transformArray = function(nums) {
    let arr = [];
    for(let num of nums){
        if(num % 2 === 0){
            arr.push(0)
        } else {
            arr.push(1)
        };
    };
    return arr.sort();
};