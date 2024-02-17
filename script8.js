const fruits = ['jablko', 'pomeranč', 'kiwi', 'hruška']

// vykreslit pomocí JS list s ovocem

const ul = document.createElement('ul')

fruits.forEach((item, index) => {
  const li = document.createElement('li')
  if (index % 2) {
    // li.classList.add('text-red')
    // li.style.color = 'red'
  }
  li.textContent = item
  ul.appendChild(li)
})

// document.querySelector('body').appendChild(ul)
// console.log(ul)
document.body.appendChild(ul)
// document.body.appendChild(ul)
// document.body.appendChild(ul)
// document.body.appendChild(ul)
// document.getElementsByTagName('body')[0].appendChild(ul)
// document.querySelectorAll('body')[0].appendChild(ul)

// ul.classList.add('class-name') - přiřadí elementu třídu
// ul.classList.remove('class-name') - odebere elementu třídu
// ul.classList.toggle('class-name') - přiřadí elementu třídu, pokud ji nemá, nebo odebere, pokud ji má
// ul.classList.add('text-red')

// const li = document.querySelector('li')
// li.style.color = 'green'
// li.style.fontSize = '26px' // font-size

HTMLElement.prototype.makeMeRed = function() {
  this.classList.add('text-red')
}
ul.makeMeRed()
