function lengthOfLongestSubstring(s) {
    let set = new Set();
    let maxLen = 0, start = 0;

    for (let end = 0; end < s.length; end++) {
        if (set.has(s[end])) {
            set.delete(s[start]);
            start++;
            end--; 
        } else {
            set.add(s[end]);
            maxLen = Math.max(maxLen, set.size);
        }
    }

    return maxLen;
}