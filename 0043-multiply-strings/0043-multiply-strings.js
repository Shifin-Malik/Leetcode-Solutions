/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
   let num = BigInt(num1) * BigInt(num2)
   let res = `${num}`
   return res;
};