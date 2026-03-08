/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    const vowels = "aeiouAEIOU";
    let vowelArr = [];

    // collect vowels
    for (let ch of s) {
        if (vowels.includes(ch)) {
            vowelArr.push(ch);
        }
    }

    // reverse vowels
    vowelArr.reverse();

    let result = "";
    let i = 0;

    // replace vowels
    for (let ch of s) {
        if (vowels.includes(ch)) {
            result += vowelArr[i++];
        } else {
            result += ch;
        }
    }

    return result;
};