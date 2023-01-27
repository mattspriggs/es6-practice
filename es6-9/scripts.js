function calculateBill(total, tax, tip){
	return total = total + (total * tax) + (total * tip)
}

const totalBill = calculateBill(100, 0.13, .15)

console.log(totalBill)

function calculateBill2(total, tax, tip){
	if(tax === undefined){
		tax = 0.13
	}
	if(tip === undefined){
		tip = 0.15
	}
	return total = total + (total * tax) + (total * tip)
}

const totalBill2 = calculateBill2(100)

console.log(totalBill2)

function calculateBill3(total, tax= 0.13, tip = 0.15){
	return total = total + (total * tax) + (total * tip)
}//putting the = in the parameters provides the assumption if nothing is passed in

const totalBill3 = calculateBill3(100)

console.log(totalBill3)

const totalBill4 = calculateBill3(100, undefined, 0.25)

console.log(totalBill4)