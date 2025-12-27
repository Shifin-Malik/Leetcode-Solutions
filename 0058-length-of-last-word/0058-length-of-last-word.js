const lengthOfLastWord = (s) => {
  let arr = s.trim().split(' ');
  let len = arr[arr.length - 1]
  return len.length
}