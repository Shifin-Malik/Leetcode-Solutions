function maximum69Number (num: number): number {
    let str : string = num.toString();
    let res : string = str.replace('6','9');
    let out : number = Number(res);
    return out
};