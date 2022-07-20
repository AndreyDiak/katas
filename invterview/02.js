function flatten(array) {
  let res = []

  array.forEach(item => {
    if ( Array.isArray(item) ) {
      const flat = flatten(item)
      flat.length > 0 ? res = [...res, ...flat] : null
    } else {
      res = [...res, item]
    }
  })

  return res
}

console.log(flatten([[1], [[2, 3]], [[[4]]]])) // -> [1, 2, 3, 4]