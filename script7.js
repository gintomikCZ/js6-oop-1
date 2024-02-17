// vytváření elementu

// const li = document.createElement('li')
// console.log(li)

// HTML Elements
// vlastnost textContent
// li.textContent = 'banán'
// console.log(li)
// připojování dceřinných elementů
// element.appendChild(el) - el se zařadí na konec HTML obsahu elementu


// vytvořit li - banán a přidat jej do prvního ulka

const li = document.createElement('li')
li.textContent = 'banán'
// const ul = document.getElementsByTagName('ul')[0]
const ul = document.querySelector('ul')
ul.appendChild(li)

const input = document.querySelector('input')
console.log(input.value)
console.log(ul.innerHTML)
ul.innerHTML = ''
console.log(document.querySelector('li'))
