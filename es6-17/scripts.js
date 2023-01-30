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