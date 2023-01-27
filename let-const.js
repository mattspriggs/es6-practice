//IIFE Immediately-Invoked Function Expression - must be at the beginning of the file to keep it from being declared globally
(function (){
	var name = 'Matt'
})()

var width = 200
console.log(width)

var width = 100
console.log(width)
//can be reassigned but also redeclared without issue - a problem

function setWidth(){
	var width = 100//the var is scope limited here
	console.log(width)
}
setWidth()

var age = 100
if(age > 12){
	//var dogYears = age * 7//this will leak from the function to a global variables
	//let dogYears = age * 7//this will not leak from the function - block scoped
	const dogYears = age * 7//this will not leak from the function - block scoped
	console.log(`You are ${dogYears} dog years old!`)
}

const key = 'abc123'
let points = 50
let winner = false

//let points = 60 // let does not allow for redeclaration
if(points > 40){
	let winner = true//block bound, it will not reassign outside the block
}

//key = 'abc1234' - cannot be reassigned

const person = {
	name: 'Matt',
	age: 57
}
person.age = 58//can reassign attributes within a const declared object

const Matthew = Object.freeze(person)
//Matthew.age = 22//The above freeze keeps the object immutable

const name = 'Matthew'//declares global
{
	const name = 'Matthew'//declares it within the block
}

for(var i = 0; i < 10; i++){
	console.log(i)//will leak the value of i to the global so i = 10 - runs immediately
	setTimeout(function(){
		console.log('The number is ' + i)
	}, 1000)//This will print out all as 10, not 0-9 as above due to use of var
}

for(let i = 0; i < 10; i++){
	console.log(i)//will not leak the value of i to the global so i = 10 - runs immediately
	setTimeout(function(){
		console.log('The number is ' + i)
	}, 1000)//This will print out 0-9 as above
}