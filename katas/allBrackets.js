function isBalanced(str) {
  const [start, end] = ['({[', ')}]'];
  const map = {
    ')' : '(',
    '}' : '{',
    ']' : '['
  }
  const queue = [];

  for (let i = 0; i < str.length; i ++) {
    const char = str[i];
    if (start.includes(char)) {
      queue.push(char);
    } else if (end.includes(char)) {
      const last = queue.pop();
      console.log('last: ' + last)
      console.log('char: ' + char)
      if (map[char] !== last) {
        console.log(map[char])
        return false;
      }
    }
  }
  return !queue.length;
}

console.log(isBalanced('(x + y) - (4)')) // -> true
console.log(isBalanced('(((10 ) ()) ((?)(:)))')) // -> true
console.log(isBalanced('[{()}]')) // -> true
console.log(isBalanced('(50)(')) // -> false
console.log(isBalanced('[{]}')) // -> false