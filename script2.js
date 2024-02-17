// let str = new String('ahoj')

// console.log(str)
// console.log(str + 'lala')
// console.log(str.toLowerCase())

let str2 = 'ahoj'

const ob1 = {}
const ob2 = new Object()
const ob3 = new Object(null)
// const ob4 = new Object('ahoj')
console.log(ob1, ob2, ob3)

console.log([1, 2, 3])

// constructor
function Person (first, last) {
  this.first = first
  this.last = last
  // this.age = 30
}

Object.prototype.age = 30

const adam = new Person('Adam', 'Hádl')
// console.log(Object.getPrototypeOf(adam))

// adam.age = 30
console.log(adam.age)
const karel = new Person('Karel', 'Houska')
console.log(karel.age)

const ar = [1, 2, 3]

