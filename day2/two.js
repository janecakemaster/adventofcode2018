const assert = require('chai').assert
const fs = require('fs')
const input = fs.readFileSync('day2/input', { encoding: 'utf8' })
const boxes = input.split('\n')

assert.equal(compareBoxes('abcde', 'axcye').score, 2)
assert.equal(compareBoxes('fghij', 'fguij').score, 1)
assert.equal(compareBoxes('fghij', 'fguij').commonLetters, 'fgij')

while (boxes.length) {
  const curr = boxes.shift()

  boxes.forEach(box => {
    const { score, commonLetters } = compareBoxes(curr, box)
    if (score === 1) {
      console.log('found')
      console.log({ curr, box })
      console.log({ commonLetters })
    }
  })
}

function compareBoxes (a, b) {
  const len = a.length
  let score = 0
  let commonLetters = []

  for (let i = 0; i < len; i++) {
    if (a[i] === b[i]) {
      score++
      commonLetters.push(a[i])
    }
  }

  return {
    score: len - score,
    commonLetters: commonLetters.join('')
  }
}
