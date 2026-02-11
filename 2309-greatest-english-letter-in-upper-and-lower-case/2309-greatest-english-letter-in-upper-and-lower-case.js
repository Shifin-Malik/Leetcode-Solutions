/**
 * @param {string} s
 * @return {string}
 */
var greatestLetter = function(s) {
    let set = new Set(s);
    for(let i = 25; i >= 0; i--){
        let u = String.fromCharCode(65 + i);
        let l = String.fromCharCode(97 + i);

        if(set.has(u) && set.has(l)){
            return u
        }
    } 
    return ''
};