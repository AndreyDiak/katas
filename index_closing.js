function getCounter() {
  let counter = 0
  return () => counter++
}

let count = getCounter()

console.log( count() )
console.log( count() )
console.log( count() )



/*
При каждом вызове функции count() для неё создается новая область видимости,
но для getCounter() существует только одна область видимости, и в этой области видмости
переменная counter уже объявлена, поэтому её значение сохраняется между вызовами функций count()
*/


