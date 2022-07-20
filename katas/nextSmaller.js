function multiply(start, end) {
  const arr = [];
  for (let i = 0; i < start.length; i++) {
    for (let j = 0; j < end.length; j++ ) {
      const str = start[i] + end[j]
      if (!arr.includes(str) && !start[i].split('').includes(end[j])) {
        arr.push( str )
      }
    }
  }
  return arr;
}

function nextSmaller(n) {
  let t = n.toString();
  let arr = t.split('');
  const acc = [];
  const answer = [];

  if (arr.length === 1) {
    return -1;
  }
  if (arr.length === 2) {
    return arr
  }
  for (let i = 0; i < arr.length; i ++) {
    const obj = {};
    for (let j = 0; j < arr.length; j ++) {
      if (i !== j) {
        if (!obj[arr[i]]) {
          obj[arr[i]] = arr[j]
        } else {
          obj[arr[i]] = [ ...obj[arr[i]], arr[j] ]
        }
      }
    }
    acc.push(obj)
  }
  for (let i = 0; i < acc.length; i ++) {
    const obj = acc[i]; // {'1': [2,3]}

    Object.keys(obj).map(key => {
      let arr = obj[key].map(_ => obj[key]); // arr = [2, 3] / key = 1
      console.log('key: ' + key)
      console.log(arr)
    })

  }
  // return answer
  // console.log(answer)
}

// console.log( nextSmaller(9) ) //== -1
console.log( nextSmaller(21) ) //== -1
// console.log( nextSmaller(111) ) //== -1
// console.log( nextSmaller(135) ) //== -1
// console.log( nextSmaller(5120) ) //== -1
// console.log( nextSmaller(441) ) //== -1
// console.log( nextSmaller(414) ) //== -1