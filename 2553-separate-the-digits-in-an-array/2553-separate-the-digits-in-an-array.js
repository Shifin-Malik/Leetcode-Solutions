/**
 * @param {number[]} nums
 * @return {number[]}
 */


var separateDigits = function(nums) {
    let answer = [];
    for(let num of nums){
       let digits = num.toString().split("")
        for(let dig of digits){
            answer.push(Number(dig))
        };
    };
    return answer;
};