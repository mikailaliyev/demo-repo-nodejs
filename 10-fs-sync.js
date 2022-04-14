const {readFileSync, writeFileSync, write} = require("fs")
console.log('start');
const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')
// console.log(first, '\n',second)

writeFileSync('./content/result-sync.txt', `Here is ther result ${first}, \n${second}`, {flag: 'a'})
console.log('Done with this task');
console.log('Starting with the next one');