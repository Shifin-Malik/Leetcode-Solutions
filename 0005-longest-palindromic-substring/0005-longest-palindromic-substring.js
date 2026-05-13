var longestPalindrome = function(s) {
    let ans = "";
    let expand = (l, r) => {
        while(l >= 0 && r < s.length && s[l] === s[r]){
            l--;
            r++
        };
        return s.slice(l + 1, r)
    };
    
    for(let i = 0; i < s.length; i++){
        let odd = expand(i, i);
        let even = expand(i, i + 1);
        
        if(odd.length > ans.length) ans = odd
        if(even.length > ans.length) ans = even
    }
    
    return ans
};