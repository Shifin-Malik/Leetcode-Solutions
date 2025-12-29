function fizzBuzz(n){
  let arr = [];

  for(let i = 1; i <= n; i++){
    let str = '';

    if(i % 3 === 0) str += 'Fizz';
    if(i % 5 === 0) str += 'Buzz';

    arr.push(str || i.toString());
  }

  return arr;
}