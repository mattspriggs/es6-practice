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


