// const people = document.querySelectorAll('.people p')
// const peopleArray = Array.from(people)//takes an array-ish (node list) and converts to an array
// console.log(peopleArray)
// const names = peopleArray.map(person => person.textContent)
// console.log(names)
//REFACTORED:
// const people = Array.from(document.querySelectorAll('.people p'))
// const names = people.map(person => person.textContent)
// console.log(names)
//REFACTORED AGAIN
// const people = document.querySelectorAll('.people p')
// const peopleArray = Array.from(people, person => {
// 	console.log(person)
// 	return person.textContent
//
// })
// console.log(peopleArray)

function sumAll(){
	const nums = Array.from(arguments)
	return nums.reduce((prev,next) => prev + next, 0)
}

sumAll(1,23,242,45,654,378,99,990)

//Array.of()
const ages = Array.of(12,34,24,55,66,75,47)//Creates an array from whatever you pass it
console.log(ages)