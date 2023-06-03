const fs = require('fs');

// 同步读取文件: 注意读取的是字符串格式
const dataFile =  fs.readFileSync("./data.json","utf8")

// 同步书写文件
const dataWriete = `这是json数据${dataFile}`
fs.writeFileSync("./creat.txt", dataWriete )

console.log('write success!!!')
