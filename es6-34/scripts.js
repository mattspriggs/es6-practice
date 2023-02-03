//Promises
const postsPromise = fetch('https://baconipsum.com/api/?type=all-meat&paras=2&start-with-lorem=1')

postsPromise
	.then(data => data.json())
	.then(data => {console.log(data)})//.then()will only run when the data comes back
	.catch(err => {console.error(err)})