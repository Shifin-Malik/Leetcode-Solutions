/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  let ord = strs.sort()
  let start = ord[0]
  let end = ord[ord.length - 1]
  let ans =""

  for(let i = 0; i < start.length; i++){
    if(start[i] === end[i]){
        ans+=start[i]
    } else {
        break;
    }
  }
return ans
};