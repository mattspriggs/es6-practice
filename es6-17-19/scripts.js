const course = 'RFB2'
const flightNumber = '20-AC2018-jz'
const accountNumber = '825242631RT0001'

const make = 'BMW'
const model = 'X5'
const colour = 'Royal Blue'

//.startsWith()
console.log(course.startsWith('RFB'))//Searches at the beginning
console.log(flightNumber.startsWith('AC'))//Searches at the beginning
console.log(flightNumber.startsWith('AC', 3))//allows you to skip a certain number of characters
//.endsWith()
console.log(flightNumber.endsWith('jz'))
console.log(accountNumber.endsWith('RT'))
console.log(accountNumber.endsWith('RT', 11))
//.includes()
console.log(flightNumber.includes('AC'))
console.log(flightNumber.includes('ac'))//case-sensitive so will be false
//.repeat()
function leftPad(str, length = 20){//will make them align to the right with correct padding at 20px
	return `➡️ ${' '.repeat(length - str.length)}${str}`
}

console.log(leftPad(make))
console.log(leftPad(model))
console.log(leftPad(colour))

console.log(`${'💃'}`.repeat(10))
console.log(`${'💃' * 5}`.repeat(10) + ' Batman!!!')

const person ={
	first: 'Matt',
	last: 'Spriggs',
	country: 'New Zealand',
	twitter: '@MattCSpriggs'
}

//destructuring allows us to extract data from objects and arrays
// const first = person.first
// const last = person.last

const { first, last, twitter} = person//this is the same as the above declared variables
console.log(`${first} ${last} can be found on Twitter ${twitter}`)

const matt ={
	first: 'Matt',
	last: 'Spriggs',
	links:{
		social: {
			twitter2: 'https://twitter.com/MattCSpriggs',
			facebook: 'https://www.facebook.com/matt.c.spriggs/'
		},
	},
	web: {
		portfolio: 'https://mattspriggs.com'
	},
	country: 'New Zealand',
}

const { twitter2:tweet, facebook:fb} = matt.links.social//you can also rename the variable by using, for example twitter2:tweet

console.log(`Matt can be found on social media at: Twitter: ${tweet} and Facebook: ${fb}`)

//const settings = {width: 300, color: 'black'}
//const { width = 100, height = 100, color = 'blue', fontSize = 25} = settings
//Object destructuring with variable renaming and default values
const { w: width = 400, h: height = 500 } = { w:800 }

console.log(width, height)

const details = ['Matt Spriggs', 123, 'mattspriggs.com']
const [name, id, website] = details
console.log(name, id, website)

const data = 'Basketball,Sports,90210,23,abc, 123,lmnop'
const [itemName, category, sku, quantity] = data.split(',')//will ignore extraneous data
console.log(itemName, category, sku, quantity)

const team = ['Wes', 'Harry', 'Sarah', 'Keegan', 'Riker']

const [captain, assistant, ...players] = team//using the ... rest operator (like the spread operator) places the rest into an array
console.log(captain, assistant, players)
