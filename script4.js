// statická versus prototype method
/*
Number.isNaN(par)
Number.isInteger(par)
....
let num = 100010203
num.toString() // '100010203'

Array
  - reduce, map, find, every ... forEach - prototypální

  Array.isArray(par)
  Array.from()

Object
  Object.keys(obj)
  Object.values(obj)
  Object.assign(obj, obj2, ....)
*/

const obj = {
  first: 'Karel'
}
// Object.assign(obj, { last: 'Houska' }, { age: 30 }, { last: 'Rohlík' })
// console.log(obj)

const copyOfObj = Object.assign({}, obj) // - vytvoří shallow copy z obj

obj.first = 'Pavel'

console.log(copyOfObj)

const ar = new Array (7, 8, 9)
console.log(ar)

const ar1 = new Array(10)
console.log(ar1)
ar1[4] = 'ahoj'
console.log(ar1)

// const str = new String('ahoj')
const str = 'ahoj'
