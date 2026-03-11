/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
   let max = 0;
   for(let acc of accounts){
    let sum = 0;
    for(let mon of acc){
       sum += mon;
       if(sum > max){
        max = sum
       }
    }
   }
    return max
};