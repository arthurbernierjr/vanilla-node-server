const fs = require('fs')
const path = require('path')
const os = require('os')
// fs.mkdir(path.join(__dirname, 'testpath'), err => {
//   if(err) throw err
//   console.log('Folder created')
// })

fs.writeFile(path.join(__dirname, 'testpath', 'hello.txt'), 'Hello world', err => {
  if(err) throw err
  console.log('File Created')
})
 // append File
 // read File
 // rename File

 // Paltform

 console.log(os.platform())

 // CPU Arch
 console.log(os.arch())

 // CPU Core Info

 console.log(os.cpus())

 // Free and Total Memory

 console.log(os.freemem()) // or os.totalmem()

 // also .homedir and .uptime
