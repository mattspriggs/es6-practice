const inventors = ['Einstein', 'Newton', 'Galileo']
const newInventors = ['Musk', 'Jobs']

//inventors.push.apply(inventors, newInventors)// Will work to add the newInventors to inventors - apply will do inventors.push('Musk', 'Jobs') essentially for each item - it applies push to each array item

inventors.push(...newInventors)
console.log(inventors)