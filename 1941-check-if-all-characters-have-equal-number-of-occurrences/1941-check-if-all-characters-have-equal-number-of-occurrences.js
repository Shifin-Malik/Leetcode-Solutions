/**
 * @param {string} s
 * @return {boolean}
 */
var areOccurrencesEqual = function(s) {
    let count = {};
    for(let ch of s){
        count[ch] = (count[ch] || 0) + 1
    };
    let values = Object.values(count);
    return values.every(v => v === values[0])
};