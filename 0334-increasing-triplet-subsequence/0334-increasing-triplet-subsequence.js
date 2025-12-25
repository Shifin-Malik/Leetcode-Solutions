/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
    let small = Infinity;
    let sec = Infinity;

    for(let i of nums){
        if(i <= small){
            small = i
        } else if (i <= sec){
            sec = i
        } else {
            return true
        } 
    }
    return false
};