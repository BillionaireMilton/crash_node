const fs = require('fs')
const path = require('path')


const rs = fs.createReadStream('./files/lorem.txt', { encoding: 'utf8'})

const ws =  fs.createWriteStream('./files/new-lorem.txt')

// rs.on('data', (dataChunk) => {
//     ws.write(dataChunk)
// })

rs.pipe(ws) // this is more efficient compared to the method used above

// fs.rename(path.join(__dirname, 'files', 'new-loren.txt'), path.join(__dirname, 'files', 'new-lorem.txt'), (err) => {
//     if(err) throw  err
//     console.log('Rename complete')
// })