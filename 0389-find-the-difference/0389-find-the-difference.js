/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
   let sumS = s.split('').sort(); 
   let sumT = t.split('').sort();
   
   for(let i = 0; i < sumT.length; i++){
       if(sumS[i] !== sumT[i]) return sumT[i]
   }
};