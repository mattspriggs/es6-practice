const dict = {
	HTML: 'Hyper Text Markup Language',
	CSS: 'Cascading Style Sheets',
	JS: 'JavaScript'
}

function addAbbreviations(strings, ...values){
	const abbreviated = values.map(value => {
		if(dict[value]){
			return `<abbr title="${dict[value]}">${value}</abbr>`
		}
		return value
	})
	return strings.reduce((sentence3, string, i) => {
		return `${sentence3}${string}${abbreviated[i] || ''}`
	},'')
}

const first = 'Matt'
const last = 'Spriggs'

const sentence3 = addAbbreviations`Hello my name is ${first} ${last} and I love to code in ${'HTML'}, ${'CSS'} and ${'JS'}`

const bio = document.querySelector('.bio')
const ptag = document.createElement('p')
bio.appendChild(ptag)
ptag.innerHTML = sentence3