/**
 * @param {number[]} apple
 * @param {number[]} capacity
 * @return {number}
 */
var minimumBoxes = function(apple, capacity) {
  let sum = 0;
  let count = 0;
  let totalAppleSum = apple.reduce((a,b)=>a+b,0); 
  let revCapacity = capacity.sort((a,b)=>b-a);
  for(let i of revCapacity){
    sum+=i
    count++
    if(sum >= totalAppleSum){
        return count
    }
  }

};