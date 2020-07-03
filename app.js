const yargs = require("yargs")
var [amount = 0] = yargs.argv._ || []
const colours = [
    "red",
    "green",
    "yellow",
    "green",
    "red",
    "red",
    "green",
    "red",
    "green",
    "blue",
    "yellow",
    "green",
    "green",
    "red",
    "green",
    "blue",
]

const notes = [
    {
        currency: 2000,
        count: 5,
    },
    {
        currency: 500,
        count: 7,
    },
    {
        currency: 200,
        count: 2,
    },
    {
        currency: 100,
        count: 4,
    },
]

const calculateNotes = (amount) => {
  const notesCounter = {}
  notes.forEach(({ currency, count = 0 }) => {
    if (amount >= currency) {
      const multiplier = parseInt(amount / currency)
      notesCounter[currency] = multiplier > count ? count : multiplier
      amount -= currency * notesCounter[currency]
    }
  })
  return amount
    ? `ATM is running Out of Service, please try lesser amount`
    : `Here is your cash - ${JSON.stringify(notesCounter)}`
}

const getMax = obj => Object.keys(obj).reduce((a, b) =>
    obj[a] > obj[b] ? a : b
)

const findMaxColor = () => {
  const colorMap = {}
  colours.forEach((color) => {
    colorMap[color] = colorMap[color] ? colorMap[color] + 1 : 1
  })
  const maxKey = getMax(colorMap)
  return `${maxKey} - ${colorMap[maxKey]}`
}

const runner = amount ? calculateNotes(amount) : findMaxColor()

console.log(runner)