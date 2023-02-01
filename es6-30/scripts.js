const deepDish = {
	pizzaName: 'Deep Dish',
	size: 'Medium',
	ingredients: ['Marinara', 'Italian Sausage', 'Dough', 'Cheese']
};

// const people = Array.from(document.querySelectorAll('.people p'))
const people = [...document.querySelectorAll('.people p')]// spread will also create an array from the query selector