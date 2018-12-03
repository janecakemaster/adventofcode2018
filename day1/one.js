const fs = require('fs')
const input = fs.readFileSync('day1/input', { encoding: 'utf8'})
let frequency = 0

input.split('\n').forEach(step => {
  const operator=  step[0] 
  const amt = Number(step.slice(1))

  if (operator === '+') {
    frequency = frequency + amt
  }
  if (operator === '-') {
    frequency = frequency - amt
  }
})

console.log('answer:', frequency)
