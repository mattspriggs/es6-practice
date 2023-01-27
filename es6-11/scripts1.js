// Select all the list items on the page and convert to array
let list = Array.from(document.querySelectorAll('li'))
console.log(list)
// Filter for only the elements that contain the word 'Flexbox'
const flexbox = list
	.filter(item => item.textContent.includes('Flexbox'))
// map down to a list of time strings
	.map(item => item.dataset.time)
// map to an array of seconds
	.map(timeCode => {
		const parts = timeCode.split(':').map(part => parseFloat(part))
		return (parts[0]*60) + parts[1]
	})
// reduce to get total
	.reduce((runningTotal, seconds) => runningTotal + seconds,0)

// 🔥 This can also be done in a single .reduce(), but we're practicing arrow functions here, so chain them!
console.log(flexbox)