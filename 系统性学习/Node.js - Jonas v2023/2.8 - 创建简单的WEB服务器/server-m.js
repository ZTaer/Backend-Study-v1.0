const http = require('http');

// 1. 创建http服务
const server = http.createServer( (req,res) => {
    res.end("success!!!")
} );

// 2. 监听端口
server.listen("3000","127.0.0.1", () => {
    console.log('监听3000端口')
})