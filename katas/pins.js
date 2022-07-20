function multiply(start, end) {
  const arr = [];
    for (let i = 0; i < start.length; i++) {
      for (let j = 0; j < end.length; j++ ) {
        const str = start[i] + end[j]
        if (!arr.includes(str)) {
          arr.push( str )
        }
      }
    }
  return arr;
}

function getPINs (observed) {
  // return observed.split('')
  //   .map( t => ({
  //     '0': [ '0', '8' ],
  //     '1': [ '1', '2', '4' ],
  //     '2': [ '1', '2', '3', '5' ],
  //     '3': [ '2', '3', '6' ],
  //     '4': [ '1', '4', '5', '7' ],
  //     '5': [ '2', '4', '5', '6', '8' ],
  //     '6': [ '3', '5', '6', '9' ],
  //     '7': [ '4', '7', '8' ],
  //     '8': [ '5', '7', '8', '9', '0' ],
  //     '9': [ '6', '8', '9' ]
  //   }[t]))
  //   // .reduce((pre, cur)=> [].concat.apply([], pre.map(t => cur.map(g => t + g))))

  const arr = observed.split(''); //
  const acc = [];
  let answer = [];
  const chances = [
    '8', // 0
    '24', // 1
    '135', // 2
    '26', // 3
    '157', // 4
    '2468', // 5
    '359', // 6
    '48', // 7
    '5790', // 8
    '68', // 9
  ];
  if (arr.length === 1) {
    return [...arr, ...chances[arr[0]]]
  }

  arr.map(str => acc.push( [ str, ...chances[str] ] ))
  answer = multiply(acc[0] , acc[1])

  if (acc.length == 2) {
    return answer
  }

  for (let i = 2; i < acc.length; i ++) {
    answer = multiply( answer, acc[i] );
  }

  return answer
}

console.log(getPINs('8'))
console.log(getPINs('11'))
console.log(getPINs('369'))
