/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function(sentence) {
    let arr = sentence.split('')
    let str = [... new Set(arr)];
    return str.length === 26

};