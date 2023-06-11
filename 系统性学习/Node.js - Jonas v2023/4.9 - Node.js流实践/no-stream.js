/**
 * 构建: 非流, 请求文件服务，禁用写法
 */

const fs = require('fs');
const http = require('http');

const server = http.createServer();

server.on( "request", (req,res) => {
    fs.readFile( "sample.mp4", (error, data) => {
        res.end(data)
    } )
} )

server.listen("3000", "127.0.0.1", () => {
    console.log('start-port:3000')
});