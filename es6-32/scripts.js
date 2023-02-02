//...Rest parameter that will just give you the entirety

function convertCurrency(rate, ...amounts){
	return amounts.map(amount => amount * rate)
}

const amounts =convertCurrency(1.54, 10, 2, 34, 54, 1, 56)

console.log(amounts)

const runner = ['Matt Spriggs', 123,5.6,6.7, 7,10,9,8,9.5]
const [name, id, ...runs] = runner
console.log(name, id, runs)

const team = ['Matt', 'Wes', 'Billy', 'John', 'Fred', 'Joe', 'Sanjay']
const [captain, assistant, ...players] = team
console.log(captain, assistant, players)

//Object Literals
const first = 'snickers'
const last = 'bos'
const age = 2
const breed = 'King Charles Cav'

const dog = {//when the key and the variable of the object are the same you can just type it once
	firstName: first,
	last,
	age,
	breed,
	pals: ['Hugo', 'Sunny']
}

const modal = {
	create:{

	},
	open:{

	},
	close:{

	},
}