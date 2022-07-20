function transform(str) {
  return Array.from(new Set(str)).sort().join('');
}

function findUniq(arr) {
  const map = {}
  let minStr = '';
  let minCount = Infinity;
  arr.map((str => {
    let t = transform(str)
    if (!map[t]) {
      map[t] = 1
    } else {
      map[t] ++
    }
  }))

  Object.keys(map).reverse().map(key => {
    if (map[key] < minCount) {
      [minCount, minStr] = [map[key], key]
    }
  })

  for (let i = 0; i < arr.length; i++) {
    if (transform(arr[i]) === minStr) {
      return arr[i]
    }
  }
  return false
}

console.log(findUniq([ 'Aa', 'aaa', 'aaaaa', 'BbBb', 'Aaaa', 'AaAaAa', 'a' ])) // 'BbBb'
console.log(findUniq([ 'abc', 'acb', 'bac', 'foo', 'bca', 'cab', 'cba' ])) // 'foo'
console.log(findUniq([ 'silvia', 'vasili', 'victor' ])) //'victor'
console.log(findUniq([ 'Tom Marvolo Riddle', 'I am Lord Voldemort', 'Harry Potter' ])) // 'Harry Potter'
console.log(findUniq([ '    ', 'a', ' ' ])) // 'a'
