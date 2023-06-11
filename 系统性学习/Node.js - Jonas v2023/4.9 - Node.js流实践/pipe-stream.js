/**
 * 构建: 构建: 使用管道 `pipe` 函数, 构建管道只读流, 请求文件服务
 */

const fs = require('fs');
const http = require('http');

const server = http.createServer();

server.on( "request", (req,res) => {

    const stream = fs.createReadStream("sample.mp4"); // fs以流的方式读取文件
    res.writeHead(200, { 'Content-Type': 'video/mp4' }); // 改变数据头

    stream.pipe(res); // 使用pipe管道发送数据
  
} )

server.listen("3000", "127.0.0.1", () => {
    console.log('start-port:3000')
});