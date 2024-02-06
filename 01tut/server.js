// console.log("Hello  Node, Your Master Is Here Now")
// console.log(global)

const os = require('os')
const path = require('path')
// const math = require('./math')
const { add, subtract, multiply, divide } = require('./math') // math destructured


console.log("_______ math custom module _______")
console.log(add(4, 5))
console.log(subtract(4, 5))
console.log(multiply(4, 5))
console.log(divide(4, 5))


// console.log("_______ os core module _______")
// console.log(os.type())
// console.log(os.version())
// console.log(os.homedir())
// console.log(os.platform())
// console.log(os.totalmem())

// console.log("_______ dir name and file name _______")
// console.log(__dirname)
// console.log(__filename)

// console.log("_______ path core module _______")
// console.log(path.dirname(__filename))
// console.log(path.dirname(__dirname))
// console.log(path.basename(__filename))
// console.log(path.extname(__filename))

// console.log(path.parse(__filename))

