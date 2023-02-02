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

// const modal = {
// 	create: function(){
//
// 	},
// 	open: function(){
//
// 	},
// 	close: function(){
//
// 	},
// }
//Shorthand for the above use of functions in a modal
const modal= {
	create(selector){

	},
	open(content){

	},
	close(goodbye){

	},
}

//Computed property names
function invertColor(color){
	return '#' + ("000000" + (0xFFFFFF ^ parseInt(color.substring(1),16)).toString(16)).slice(-6)
}//provides the opposite color

const key = 'pocketColor'
const value = '#ffc600'

const tShirt = {
	[key]: value,
	[`${key}Opposite`]: invertColor(value)
}

console.log(tShirt)

//For awkward info from an API
const keys = ['size', 'color', 'weight']
const values = ['medium', 'red', 100]

const shirt = {
	[keys.shift()]: values.shift(),
	[keys.shift()]: values.shift(),
	[keys.shift()]: values.shift()
}

console.log(shirt)