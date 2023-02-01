const deepDish = {
	pizzaName: 'Deep Dish',
	size: 'Medium',
	ingredients: ['Marinara', 'Italian Sausage', 'Dough', 'Cheese']
};

// const people = Array.from(document.querySelectorAll('.people p'))
const people = [...document.querySelectorAll('.people p')]// spread will also create an array from the query selector
const names = people.map(person => person.textContent)

console.log(names)

//Array from an object with an array within it'
const shoppingList = ['Milk', 'Flour', ...deepDish.ingredients]
console.log(shoppingList)

const comments = [
	{id: 209384, text: 'I love your dog!'},
	{id: 523423, text: 'Cuuute!! 🐕'},
	{id: 632429, text: 'You are so dumb'},
	{id: 192834, text: 'Nice work on this Wes!'}
]

const id = 632429

const commentIndex = comments.findIndex(comment => comment.id === id)
console.log(commentIndex);

const newComments = [...comments.slice(0,commentIndex), ...comments.slice(commentIndex + 1)]
console.log(newComments)
// const newComments2 = [comments.splice(0,commentIndex), comments.splice(commentIndex + 1)]
// console.log(newComments2)