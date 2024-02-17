// import { data as items } from './data.js'
// import calculator from './calculator.js'

// console.log(items)
// // console.log(sum)
// // tree shaking

// console.log(calculator.multiply(10, 2))

// z employees vytvořit tabulku
// hlavička - 'name', 'position', 'salary'
// tělo
// 3 sloupce - plné jméno, position, salary
// stringy chci zarovnávat doleva, čísla zobrazit lokálně a rovnat doprava
// vycházíme z prázdného body

import employees from './employees.js'
console.log(employees)

// vytvořit tabulku
// vytvořit thead, v něm tr, v něm tři th
// vytvořit tbody
// cyklus na employees ... pro každýho empl. vytvořit jeden řádek tabulky - tr
// a do něj strčit tři td
const headers = ['name', 'position', 'salary']

const renderEl = (tagName, textContent, parent) => {
  const el = document.createElement(tagName)
  const isNumber = typeof textContent === 'number' && !Number.isNaN(textContent)

  el.textContent = isNumber ? textContent.toLocaleString() : textContent
  // if (typeof textContent === 'number' && !Number.isNaN(textContent)) {
  //   el.classList.add('text-right')
  // } else {
  //   el.classList.add('text-left')
  el.classList.add(isNumber ? 'text-right' : 'text-left' )
  // }
  parent.appendChild(el)
}

const table = document.createElement('table')
const thead = document.createElement('thead')
const tr = document.createElement('tr')
headers.forEach(header => {
  // const th = document.createElement('th')
  // th.textContent = header
  // tr.appendChild(th)
  renderEl('th', header, tr)
})
thead.appendChild(tr)
table.appendChild(thead)

const tbody = document.createElement('tbody')

employees.forEach(employee => {
  const tr = document.createElement('tr')
  renderEl('td', `${employee.first} ${employee.last}`, tr) // back tick
  renderEl('td', employee.position, tr)
  renderEl('td', employee.salary, tr)

  tbody.appendChild(tr)
})

table.appendChild(tbody)
document.body.appendChild(table)