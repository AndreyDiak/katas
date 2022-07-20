// const arr = [1, 1, 3, 4, 5]
// // class User {
// //   constructor(name, age) {
// //     this.name = name;
// //     this.age = age;
// //   }
// //   print() {
// //     console.log(this.name + ' is a Name')
// //   }
// // }
// // const Andrey = new User('Andrey', 20)
// // Andrey.print()
// // 1. arr.forEach() // проходим по массиву но ничего не возвращаем
// // arr.forEach((...args) => console.log(args))
// // 2. arr.map() // проходим по массиву и можем что-то вернуть
// // arr.map((...args) => console.log(args))
// // 3. arr.reduce() // для поиска акселератора...
// // console.log(arr.reduce((acc, next) => acc + next))
// // 4. arr.find // поиск первого удовлетворяющего условию элемента...
// // console.log(arr.find(value => value % 2 === 0))
// // 5. arr.findIndex() // возвращаем индекс удовлетворяющего условию элемента...
// // console.log(arr.findIndex(value => value % 2 === 0))
// // 6. arr.filter() // возвращает массив, элементы которого удовлевторют условию
// // console.log(arr.filter((_, index) => index !== 3)) // убрали из массива элемент с индексом 3...
// // 7. arr.push() //   х - добавляет элемент в конец и возвращает длину и мутирует массив...
// // arr.push(1,2,3,4,5)
// // 8. arr.unshift() // добавляет элемент в начало и возвращает длину и мутирует массив...
// // console.log(arr.unshift(0))
// // 9. arr.pop() // удаляем элемент в конце и возвращает его и мутирует массив..
// // console.log(arr.pop())
// // 10. arr.shift() // удаляем элемент в конеце и возвращает его и мутирует массив...
// // console.log(arr.shift())
// // 11. arr.concat() // добавляет в конец массива элементы и возвращает новый массив не мутирует массив...
// // console.log(arr.concat([1,2,3,4,5]))
// // 12. arr.join() - элементы массива в строку через сепаратор
// // str.split - строку в массив...
// // console.log('Andrey'.toUpperCase().split('').join('_'))
// // 13. arr.sort() - сортировка массива и мутирует его...
// // const newArr = [4, 42, 78, 32, 0, 2]
// // console.log(newArr.sort((next, prev) => prev - next)) // по убыванию...
// // console.log(newArr.sort((next, prev) => next - prev)) // по возрастанию...
// // 14. splice возвращает новый массив с удаленными элементами...
// const str = 'Я люблю JavaScript'
// const strArr = str.split(' ')
// strArr.splice(0,2,'Мы', 'любим')
// console.log(strArr.join(' '))
// // 15. slice - возвращает подмассив из переданного массива...
// // console.log(arr.slice(0,2)) // не включает элемент с последним индексом...
// // 16. arr.indexOf() // возвращает  первый индекс искомого элемента...
// const example = [1, 2, 3, 0, 4, 2, 1, 5, 6, 0]
// // console.log(example.indexOf(0))
// // 17. arr.lastIndexOf() // возвращает последний индекс искомого элемента...
// // console.log(example .lastIndexOf(0))
// // 18. arr.reverse()
// // console.log(arr.reverse())
// // 19. arr.includes()
// // console.log(example.includes(3)) // поиск по значению
// // 20. arr.some()
// // console.log(example.some(item => item === 3)) // поиск через callback...
// // console.log(example)
// // console.log(example.slice().filter(i => i % 2 == 0))
// // console.log(example)
//

// генерация массива...

const returnRandVal = max => Math.floor(Math.random() * max);

const returnRandArr = (length = 10, id = 10000, value = 10) => 
  Array(length)
    .fill(0)
    .map(() => ({
      id: `id-${returnRandVal(id)}-r-${returnRandVal(id)}-f-${returnRandVal(id)}`,
      owner: returnRandVal(value) >= 5 ? 'Andrey' : 'German',
      value: returnRandVal(value)
    }));

// начало задачи...

// const values = returnRandArr(5);

// const grouped = values.reduce((total, item) => {
//   (total[item.owner] = total[item.owner] || []).push(item);
//   return total;
// }, {});

// console.log(values);
// console.log(grouped);

// function findTwoMin (arr){
//   let min1 = Infinity;
//   let min2 = Infinity;

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < min1) {
//       min2 = min1;
//       min1 = arr[i];
//     } else {
//       if (arr[i] < min2) {
//         min2 = arr[i]
//       }
//     }
//   }
//   return [min1, min2]
// }