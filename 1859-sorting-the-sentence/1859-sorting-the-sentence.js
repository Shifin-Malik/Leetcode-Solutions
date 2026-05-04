/**
 * @param {string} s
 * @return {string}
 */
var sortSentence = function(s) {
    return s.split(" ")
    .sort((a,b) => a.at(-1) - b.at(-1))
    .map(word => word.slice(0, -1))
    .join(" ")
};