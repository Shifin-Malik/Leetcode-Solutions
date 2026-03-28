/**
 * @param {number} num
 * @return {number}
 */

var minimumSum = function(num) {
   let arr = num.toString().split('').reverse().map(Number)
   arr.sort((a,b) => a - b);
   let new1 = arr[0] * 10 + arr[2];
   let new2 = arr[1] * 10 + arr[3];
   return new1 + new2
};