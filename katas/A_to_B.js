function aToB(a, b) {
  if (a === b) return 'valid!';
  if (b % 2 === 0) return aToB(a, b / 2);
  if (b % 10 === 1) return aToB(a, Math.floor(b / 10));
  return 'no valid';
}
console.log( aToB(3,241) )
console.log( aToB(22, 46) )
console.log( aToB(3, 31) )
console.log( aToB(1, 11) )
// console.log( aToB(41) )
