/**
 * @param {string} s
 * @return {number}
 */
var maxDistinct = function(s) {
   let uni = new Set(s)
   return uni.size
};