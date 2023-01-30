function sanitize(strings, ...values){
	const dirty = strings.reduce((prev, next, i) => `${prev}${next}${values[i] || ''} `, '')
	return DOMPurify.sanitize(dirty)
}

const first = 'Wes';
const aboutMe = `I love to do evil <img src="http://unsplash.it/100/100?random" onload="alert('you got hacked');" />`;

const html = sanitize`
<h3>${first}</h3>
<p>${aboutMe}</p>
`

const bio = document.querySelector('.bio')
bio.innerHTML = html