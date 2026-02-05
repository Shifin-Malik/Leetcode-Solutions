
const lengthOfLastWord = (s) => {
  let t = s.trim()
  let arr = t.split(' ');
  let word = arr[arr.length - 1]
  return word.length;
};

