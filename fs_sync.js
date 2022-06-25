const {readFileSync, writeFileSync} = require('fs')
console.log('start');
// to read a file
const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')

console.log(first, second)

// to create a new file 

writeFileSync(
    './content/result-sync.txt', 
    `Here is the result : ${first}, ${second}`, 
)

console.log('done with this task')
console.log('starting the next one ')