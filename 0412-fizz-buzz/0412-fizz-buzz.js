const fizzBuzz = (n) => {
    let arr = [];
    
    for(let i = 1; i <= n; i++){
        arr.push(
         i % 15 === 0 ? 'FizzBuzz' : i % 3 === 0 ? 'Fizz' : i % 5 === 0 ? 'Buzz' : i.toString()   
        )
    }
    return arr;
};