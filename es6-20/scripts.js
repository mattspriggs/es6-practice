let inRing = 'Hulk Hogan'
let side = 'The Rock'
console.log(inRing, side);

	[inRing, side] = [side, inRing]
// side = inRing
// inRing = side
console.log(inRing, side)

function convertCurrency(amount){
		const converted = {
			USD: amount * 0.76,
			GPB: amount * 0.53,
			AUD: amount * 1.01,
			MEX: amount * 13.30
		}
		return converted
}

// const { USD, GPB, AUD, MEX } = convertCurrency(100)
// console.log(USD, GPB, AUD, MEX) - can destructure for all values in the object
const { USD, AUD} = convertCurrency(100)//can also deconstruct for just some of the values in the object
console.log(USD,  AUD)

function tipCalc({total = 100, tip = 0.15, tax = 0.13}){//Using the curly brackets for the parameters allows for each to be a discrete variable of total, tip and tax
		return total + (tip * total) + (tax * total)
}
const bill = tipCalc({tip: 0.2, total: 200, tax: 0.13 })//by destructuring the object you can pass in all, some or one variable - that has a default - and get it to run
const bill2 = tipCalc({tip: 0.2, total: 200 })
const bill3 = tipCalc({ })

console.log(bill, bill2, bill3)

// function tipCalc({total = 100, tip = 0.15, tax = 0.13} = { }){
// 	return total + (tip * total) + (tax * total) //will run with no arguments passed - tipCalc()

//forOf loops works over any iterable - anything you can loop over

const cuts = ['Chuck', 'Brisket', 'Shank', 'Short Rib']
// for(let i = 0; i < cuts.length; i++){
// 	console.log(cuts[i])
// }

// cuts.forEach((cut) =>{
// 	console.log(cut)//if(cut === 'Brisket'){continue} will not work
//
// })//unskippable and unstoppable

// for (const index in cuts){
// 	console.log(cuts[index])//will also iterate over anything added to the prototype
// }

//forOf best of all but objects
for(const cut of cuts){

	// if(cut === 'Brisket'){
	// 	//break//stops the running
	// 	continue//skips the item
	// }
	console.log(cut)
}

