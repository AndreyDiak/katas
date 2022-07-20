// class User {
//   constructor(name, age, text) {
//     this.name = name
//     this.age = age
//     this.text = text
//   }
//
//   printPass () {
//     console.log(this.name)
//   }
// }
//
// const Andrey = new User('Andrey', 20, 'hello')
// Andrey.printPass()

const obj = {
  name: "Andrey",
  age: 20,
  print: function () {
    return () => this.age + this.name
  }

}

// const print = obj.print()
// console.log(print())

for (let key in obj) {
  console.log(key)
}