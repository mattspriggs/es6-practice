const box = document.querySelector('.box')
box.addEventListener('click', function (){
	//console.log(this)//An arrow function will inherit the parent's binding of this
	let first = 'opening'
	let second = 'open'
	if(this.classList.contains(first)) {
		[first, second] = [second, first]//will switch the order of the functions
	}
	this.classList.toggle(first)
	setTimeout(() => {
		this.classList.toggle(second)//here use an arrow function so that this is not reassigned in a new function
	}, 500)
})