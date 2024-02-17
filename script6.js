// window => document => <html></html>

console.log(document) // DOM - Document Object Model

// výběr HTML Elementů z DOMu
// výběr jednoho elementu
// document.getElementById('strID') - vrátí HTMLElement nebo null
const li = document.getElementById('myLi')
console.log(li)
// document.querySelector('css selector') - vrátí první nalezený element podle selectoru nebo null

const li2 = document.querySelector('#myLi')
console.log(li2)
const li3 = document.querySelector('li')
const li4 = document.querySelector('li:nth-child(2)') // li-hruška
const li5 = document.querySelector('.my-class') // li-mrkev

// výběr více elementů
// document.getElementsByTagName('tagName')
const lis = document.getElementsByTagName('li') // HTMLCollection - ArrayLike
console.log(lis[0]) // li-švestka
// lis.forEach(el => {
//   console.log(el)
// })  - TO NEJDE
Array.from(lis).forEach(el => {
  console.log(el)
})
// document.getElementsByClassName('class-name') // HTML Coll nebo []
// document.querySelectorAll('css selector'
const lis2 = document.querySelectorAll('li:nth-child(2)') // NodeList
console.log(lis2) // [li-hruška, li-petržel]
// lis2.forEach(el => {
//   console.log(el)
// })
