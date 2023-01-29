const name = 'Snickers'
const age = 2
const sentence = `My dog ${name} is ${age * 7} years old`

console.log(sentence)

const person = {
	name: 'Matt',
	job: 'Software Developer',
	city: 'Dunedin',
	bio: 'Matt is trying to break into software development - either web or games - and will be doing a post grad cert in IT at Otago Polytech'
}

const markup = `
<div class="person">
	<h2>${person.name}
		<span class="job">${person.job}</span>
	</h2>
	<p class="location">${person.city}</p>
	<p class="bio">${person.bio}</p>
</div>
`

document.body.innerHTML = markup

const dogs = [
	{name: 'Snickers', age: 2},
	{name: 'Hugo', age: 8},
	{name: 'Sunny', age: 1},
]

const markup2 = `
	<ul class="dogs">
		${dogs.map(dog => `<li>${dog.name} is ${dog.age * 7} dog years old</li>`).join('')}
	</ul>
`
document.body.innerHTML = markup2

const song = {
	name: 'Dying to live',
	artist: 'Tupac',
	featuring: 'Biggie Smalls'
}

const markup3  = `
	<div class="song">
		<p>
		${song.name} - ${song.artist}
		${song.featuring ? ` (Featuring ${song.featuring})` : ''}
		</p>
	</div>
`
document.body.innerHTML = markup3

const beer = {
	name: 'Belgian Wit',
	brewery: 'Steam Whistle Brewery',
	keywords: ['pale', 'cloudy', 'spiced', 'crisp']
}

function renderKeyWords(keywords){
	return `
	<ul>
		${keywords.map(keyword => `<li>${keyword}</li>`).join('')}
	</ul>
	`//.join('') will return without the comma after each item
}

const markup4 = `
	<div class="beer">
		<h2>${beer.name}</h2>
		<p class="brewery">${beer.brewery}</p>
		${renderKeyWords(beer.keywords)}
	</div>
`
document.body.innerHTML = markup4