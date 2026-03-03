function longestCommonPrefix(strs: string[]): string {
    let ord: string[] = strs.sort();
    let start: string = ord[0];
    let end: string = ord[ord.length - 1];
    let ans: string = '';

    for(let i:number = 0; i < start.length; i++){
        if(start[i] === end[i]){
            ans+=start[i]
        } else {
            break;
        }
    }
    return ans
};