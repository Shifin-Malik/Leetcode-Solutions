var reversePrefix = function(s, k) {
    let firstPart = s.slice(0, k).split('').reverse().join('');
    let secPart = s.slice(k)
    return firstPart + secPart;
};