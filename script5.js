/*

globální objekty, od kterých nevytváříme instance
metody jsou statické

Math.abs(par)
Math.random() - náhodné číslo  desetinné (0 včetně - 1 nevčetně)

Math.round() - zaokrouhluje matematicky
Math.ceil() - zaokrouhluje nahoru
Math.floor() - zaokrouhluje dolů

// funkce, která vrátí náhodné číslo v rozsahu od par1 do par2 včetně
// getRandom(1, 100) - náhodné číslo od 1 do 100 (celé)

*/

Math.getRandom = (num1, num2) => {
  // let myNumber = Math.random() // necelé číslo od 0 (včetně) do 1 (nevčetně)
  // myNumber = num1 + myNumber * (num2 - num1 + 1)// necelé číslo od num1 (včetně) do num2 (nevčetně)
  // myNumber = Math.floor(myNumber) // celé číslo od num1 (včetně) do num2 (včetně)
  // return myNumber
  return Math.floor(num1 + Math.random * (num2 - num1 + 1))
}

const getTwoDecimals = (num) => {
  return parseFloat(num.toFixed(2), 10)
}



// parseFloat(num, číselná soustava) - vrací necelé číslo
// parseInt(num, číselná soustava) - vrací celé číslo


console.log(getTwoDecimals(29.903947874893))

