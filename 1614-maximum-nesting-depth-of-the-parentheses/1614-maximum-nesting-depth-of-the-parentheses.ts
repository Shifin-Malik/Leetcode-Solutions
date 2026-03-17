function maxDepth(s: string): number {
    let curr = 0;
    let max = 0;

    for(let ch of s){
        if(ch == "("){
            curr++;
            max = Math.max(max, curr)
        } else if(ch == ")"){
            curr--;
        };
    };
    return max
};