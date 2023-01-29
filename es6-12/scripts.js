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