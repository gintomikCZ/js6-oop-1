const employeesJSON = `[
  { "first": "Jenda", "last": "Benda", "position": "manager", "salary": 15000 },
  { "first": "Pavel", "last": "Novák", "position": "driver", "salary": 3000 },
  { "first": "Jana", "last": "Hotová", "position": "secretary", "salary": 200 }
]
`

export default JSON.parse(employeesJSON)

// export default [
//   { first: 'Jenda', last: 'Benda', position: 'manager', salary: 15000 },
//   { first: 'Pavel', last: 'Novák', position: 'driver', salary: 3000 },
//   { first: 'Jana', last: 'Hotová', position: 'secretary', salary: 200 },
// ]