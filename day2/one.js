const fs = require('fs')
const input = fs.readFileSync('day2/input', { encoding: 'utf8' })
const boxes = input.split('\n')
let twos = 0
let threes = 0

for (let i = 0; i < boxes.length; i++) {
  const box = boxes[i]
  const charMap = {}

  for (let j = 0; j < box.length; j++) {
    const char = box[j]
    if (charMap[char]) {
      charMap[char] = charMap[char]++
    } else {
      charMap[char] = 1
    }
  }

  const keys = Object.keys(charMap)
  let hasTwo = false
  let hasThree = false

  for (let j = 0; j < keys.length; j++) {
    const currKey = keys[j]
    if (charMap[currKey] === 2) {
      hasTwo = true
    }
    if (charMap[currKey] === 3) {
      hasThree = true
    }
  }

  if (hasTwo) twos++
  if (hasThree) threes++
}

console.log(twos, threes)
console.log('answer:', twos * threes)
