/**
 * 构建: 可写流, 请求文件服务, 不推荐写法
 */

const fs = require('fs');
const http = require('http');

const server = http.createServer();

server.on( "request", (req,res) => {

    const stream = fs.createReadStream("sample.mp4");

    // 监听: 数据进行切片
    stream.on("data", (chunk) => { 
        res.write(chunk); 
    });

    // 监听: 数据发送完毕促发
    stream.on("end", () => {
        res.end();
    } )

    // 监听: 数据错误促发
    stream.on("error", () => {
        res.statusCode = 500;
        res.end("error");
    }  )
  
} )

server.listen("3000", "127.0.0.1", () => {
    console.log('start-port:3000')
});