//...Rest parameter that will just give you the entirety

function convertCurrency(rate, ...amounts){
	return amounts.map(amount => amount * rate)
}

const amounts =convertCurrency(1.54, 10, 2, 34, 54, 1, 56)

console.log(amounts)

const runner = ['Matt Spriggs', 123,5.6,6.7, 7,10,9,8,9.5]
const [name, id, ...runs] = runner
console.log(name, id, runs)