/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function(word, ch) {
    let idx = word.indexOf(ch); // 3

    if (idx === -1) return word; // abcdefd

    let prefix = word.slice(0, idx + 1).split("").reverse().join("");
    let rest = word.slice(idx + 1);

    return prefix + rest;
};
