const first = 'Wes';
const aboutMe = `I love to do evil <img src="http://unsplash.it/100/100?random" onload="alert('you got hacked');" />`;

const html = `
<h3>${first}</h3>
<p>${aboutMe}</p>
`

const bio = document.querySelector('.bio')
bio.innerHTML = html