//Promises
const postsPromise = fetch('https://baconipsum.com/api/?type=all-meat&paras=2&start-with-lorem=1')

postsPromise
	.then(data => data.json())
	.then(data => {console.log(data)})//.then()will only run when the data comes back
	.catch(err => {console.error(err)})

//Create promises

const p = new Promise((resolve, reject) =>{
	setTimeout(() =>{
		resolve('Matt is cool')
		// reject(Error('Err Matt isn\'t cool'))
	},2000)

})

p
	.then(data => {
		console.log(data)
	})
	.catch(err =>{
		console.error(err)
	})

//simulation of a database access
const posts = [
	{title: 'I love JavaScript', author: 'Wes Bos', id: 1},
	{title: 'CSS', author: 'Chris Coyier', id: 2},
	{title: 'Dev tools tricks and tips', author: 'Addy Osmani', id: 3}
]

const authors = [
	{name: 'Wes Bos', twitter: '@wesbos', bio: 'Canadian Developer'},
	{name: 'Chris Coyier', twitter: '@chriscoyier', bio: 'CSS Tricks and CodePen'},
	{name: 'Addy Osmani', twitter: '@addyosmani', bio: 'Googler'}
]

function getPostById(id){
	//Create a new promise
	return new Promise((resolve, reject) => {
		//use setTimeout to mimic a DB
		setTimeout(() => {
			//find the post we want
			const post = posts.find(post => post.id === id)
			if(post){
				resolve(post)//send the post we want to the promise as data
			} else {
				reject(Error('No post was found!'))
			}
		}, 2000)
	})
}

getPostById(5)
	.then(post => {
		console.log(post)
		return hydrateAuthor(post)
	})
	.then(post =>{
		console.log(post)
	})
	.catch(err =>{
		console.log(err)
	})

function hydrateAuthor(post){
	//create a new promise
	return new Promise((resolve, reject) =>{
		//find the author
		const authorDetails = authors.find(person => person.name === post.author)
		if(authorDetails){
			//"hydrate" the post object with the author object
			post.author = authorDetails
			resolve(post)//pass the author back to the promise once found
		}else{
			reject(Error('No author found!'))
		}
	})
}

