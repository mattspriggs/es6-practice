const featured = ['Deep Dish', 'Peperoni', 'Hawaiian']
const specialty = ['Meatzza', 'Spicy Mama', 'Margherita']

const deepDish = {
	pizzaName: 'Deep Dish',
	size: 'Medium',
	ingredients: ['Marinara', 'Italian Sausage', 'Dough', 'Cheese']
}

//the ...spread operator will take anything that is iterable and apply it to the containing array
const pizzas = [...featured, "veg", ...specialty]//will create a new array with the names from the two arrays
const fridayPizzas = pizzas//this just creates a reference, not an isolated copy - so any change to fridayPizzas will change the referenced array of pizzas
const thursdayPizzas = [].concat(pizzas)//makes a true copy
const wednesdayPizzas = [...pizzas]//will also make a true copy of the array'


console.log(pizzas)