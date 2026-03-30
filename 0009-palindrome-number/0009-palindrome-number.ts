function isPalindrome(x: number): boolean {
    let str: string = x.toString().split('').reverse().join("");
    return str === x.toString();
}