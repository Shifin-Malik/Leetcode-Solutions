/**
 * @param {number[]} arr
 * @return {number}
 */
var findLucky = function(arr) {
    let counts = {};
    for(let num of arr){
        counts[num] = (counts[num] || 0) + 1
    };
    
    let result = -1
    
    for(let num in counts){
        if(Number(num) === counts[num]){
            result = Math.max(result, Number(num))
        }
    }
    return result
};