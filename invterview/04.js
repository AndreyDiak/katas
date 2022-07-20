function highestFrequency(array) {
  const map = {}
  let maxFreq = 0
  let maxFreqStr = array[0]

  array.forEach(item => {
    if (map[item]) {
      map[item]++
    } else {
      map[item] = 1
    }
    if (map[item] > maxFreq) {
      maxFreq = map[item]
      maxFreqStr = item
    }
  })

  return maxFreqStr

}

console.log(highestFrequency(['a', 'b', 'c', 'c', 'd', 'e'])) // -> c
console.log(highestFrequency(['abc', 'def', 'abc', 'def', 'abc'])) // -> abc
console.log(highestFrequency(['abc', 'def'])) // -> abc
console.log(highestFrequency(['abc', 'abc', 'def', 'def', 'def', 'ghi', 'ghi', 'ghi', 'ghi' ])) // -> ghi