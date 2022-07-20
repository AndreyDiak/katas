const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]

function rotate(source) {
  const newMatrix = source[0].map(_ => [])

  source.forEach((_, i) => {
    source[i].forEach((_, j) => {
      newMatrix[j][source.length - 1 - i] = source[i][j]
    })
  })

  return newMatrix
}

function rotate180(source) {
  return rotate(rotate(source))
}
function rotate270(source) {
  return rotate(rotate180(source))
}
function rotate360(source) {
  return rotate(rotate270(source))
}
const print = matrix => {
   matrix.map(item => console.log(item))
}

print(rotate(matrix))
console.log('==========')
print(rotate180(matrix))
console.log('==========')
print(rotate270(matrix))
console.log('==========')
print(rotate360(matrix))