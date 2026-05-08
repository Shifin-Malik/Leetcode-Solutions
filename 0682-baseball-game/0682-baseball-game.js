/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function(operations) {
   let res = [];
   for(let op of operations){
      if(op === "C"){
        res.pop()
      } else if (op === "D"){
        res.push(res[res.length - 1] * 2)
      } else if (op === "+"){
        res.push(res[res.length - 1] + res[res.length - 2])
      } else {
        res.push(parseInt(op))
      }
   }

   return res.reduce((a,b) => a + b, 0)
};