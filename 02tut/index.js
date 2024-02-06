const fs = require('fs')
const fsPromises = require('fs').promises
const path = require('path')

const fileOps = async () => {
    try {
        const data = await fsPromises.readFile(path.join(__dirname, 'files', 'starter.txt'), 'utf8')
        console.log(data)

        // deletes file
        await fsPromises.unlink(path.join(__dirname, 'files', 'starter.txt'), data)
        await fsPromises.unlink(path.join(__dirname, 'files', 'newReply.txt'), data)

        await fsPromises.writeFile(path.join(__dirname, 'files', 'promiseWrite.txt'), data)
        await fsPromises.appendFile(path.join(__dirname, 'files', 'promiseWrite.txt'), '\n\nNice to meet you')
        await fsPromises.rename(path.join(__dirname, 'files', 'promiseWrite.txt'), path.join(__dirname, 'files', 'promiseComplete.txt'))
        const newData = await fsPromises.readFile(path.join(__dirname, 'files', 'promiseComplete.txt'), 'utf8')
        console.log(newData)
    } catch (err) {
        console.error(err)
    }
}

fileOps()

// console.log(fs)

// fs.readFile('./files/starter.txt', (err, data) => { // this is an hardcoded file name
// fs.readFile(path.join(__dirname, 'files', 'starter.txt'), (err, data) => { // this is a better approach  because some time in some operating systems, the separators could be a forward  slash or a backward slash which could cause a lot of conflicts if hard codded
//     if(err) throw err
//     console.log(data.toString()) // use the toString method or use the utf coding as specified below
// })

// fs.readFile('./files/starter.txt', 'utf8', (err, data) => { // this is an hardcoded file name
// fs.readFile(path.join(__dirname, 'files', 'starter.txt'), 'utf8', (err, data) => { // this is a better approach  because some time in some operating systems, the separators could be a forward  slash or a backward slash which could cause a lot of conflicts if hard codded
//     if(err) throw err
//     console.log(data) // use the utf coding or use the toString method as specified above
// })

// exit on uncaught errors
process.on('uncaughtException', err => {
    console.error(`There was an uncaught error: ${err}`)
    process.exit(1)
})

// var content = "Nice to meet you."
// // Write a file
// fs.writeFile(path.join(__dirname, 'files', 'reply.txt'), 'Nice to meet you.', (err) => {
//     if(err) throw  err
//     console.log('Write complete')
// })
// // Append a file
// fs.appendFile(path.join(__dirname, 'files', 'test.txt'), 'Testing Test.', (err) => {
//     if(err) throw  err
//     console.log('Write complete')
// })

// Best to creates the file before you Append a file though append file will first create if it doesn't exist, but the best practice is to first create the file to be modified
// fs.writeFile(path.join(__dirname, 'files', 'reply.txt'), 'Nice to meet you.', (err) => {
//     if(err) throw  err
//     console.log('Write complete')
    
//     // // Append a file
//     fs.appendFile(path.join(__dirname, 'files', 'reply.txt'), '\n\nYes it is.', (err) => {
//         if(err) throw  err
//         console.log('Append complete')
//     })
    
//     // rename file
//     fs.rename(path.join(__dirname, 'files', 'reply.txt'), path.join(__dirname, 'files', 'newReply.txt'), (err) => {
//         if(err) throw  err
//         console.log('Rename complete')
//     })
// })