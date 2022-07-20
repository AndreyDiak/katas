function isStringRotated(source, test) {
  return source.length === test.length && (source + source).includes(test)
}

console.log(isStringRotated('javascript', 'scriptjava')) // -> true
console.log(isStringRotated('javascript', 'iptjavascr')) // -> true
console.log(isStringRotated('javascript', 'javascrghg')) // -> false
console.log(isStringRotated('javascript', 'java')) // -> false