const fs = require('fs')
const input = fs.readFileSync('day1/input', { encoding: 'utf8'})
const seenFrequencies = new Set()
let answer
let frequency = 0
const steps = input.split('\n')
 
while(!answer) {
  for (let i= 0; i < steps.length; i++) {
    const step= steps[i];
    const operator=  step[0] 
    const amt = Number(step.slice(1))
    
    if (operator === '+') {
      frequency = frequency + amt
    }
    if (operator === '-') {
      frequency = frequency - amt
    }

    if(seenFrequencies.has(frequency)) {
      answer = frequency
      i = steps.length
    } else {
      seenFrequencies.add(frequency)
    }
  }
}

console.log('answer:', answer)
