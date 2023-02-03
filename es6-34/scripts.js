//Promises
const postsPromise = fetch('https://baconipsum.com/api/?type=all-meat&paras=2&start-with-lorem=1')

postsPromise
	.then(data => data.json())
	.then(data => {console.log(data)})//.then()will only run when the data comes back
	.catch(err => {console.error(err)})

//Create promises

const p = new Promise((resolve, reject) =>{
	setTimeout(() =>{
	// resolve('Matt is cool')
		reject(Error('Err Matt isn\'t cool'))
	},2000)

})

p
	.then(data => {
		console.log(data)
	})
	.catch(err =>{
		console.error(err)
	})
