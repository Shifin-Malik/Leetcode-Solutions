function lengthOfLastWord(s: string): number {
    let space = s.trim();
    let arr = space.split(' ');
    let last = arr[arr.length - 1];
    return last.length
};