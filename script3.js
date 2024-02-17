let str = 'banan'
let strLower = str.toLowerCase()
let strUpper = str.toUpperCase()
let firstLetter = str.charAt(0) // 'a'

// ať všechny stringy umí to, že vrátí "hYpErCaMeLcAsE"
// možnost volat str.hyperCC()

console.log(str[0]) // 'a'

// function hyperCC (input) {
//   return input
//     .split('')
//     .map((letter, index) => index % 2 ? letter.toUpperCase() : letter.toLowerCase())
//     .join('')
// }

String.prototype.hyperCC = function() {
  console.log(this)
  return this
    .split('')
    .map((letter, index) => index % 2 ? letter.toUpperCase() : letter.toLowerCase())
    .join('')
}

console.log(str.hyperCC())

String.prototype.ucFirst = function () {
  // první písmeno velké, ostatní malá ADAM, adam, ADam, Adam
  return this.charAt(0).toUpperCase() + this.slice(1).toLowerCase()
}

console.log('TOMiK'.ucFirst())

// metodu pro všechny numbers - isEven() - vrátí true pokud je číslo párne, false pokud je nepárne
Number.prototype.isEven = function () {
  return !(this % 2)
}

Number.prototype.isOdd() = function () {
  return !!(this % 2)
}

let num = 11
console.log(num.isEven())


