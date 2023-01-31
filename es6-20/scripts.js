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

