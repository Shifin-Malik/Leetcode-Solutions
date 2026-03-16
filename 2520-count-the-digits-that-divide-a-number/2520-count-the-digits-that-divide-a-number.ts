function countDigits(num: number): number {
    let count : number = 0;
    let str : string = num.toString();
    
    for(let x of str){
        let n : number = parseInt(x);
        if(num !== 0 && num % n === 0){
            count++
        };
    };
    return count
};