const http = require('http');

const server = http.createServer();

/**
 * 观察者模式演示使用
 */

server.on("request", (req, res) => {
    res.end("request success");
})

server.on("close", (req, res) => {
    res.end("request close");
})

server.listen("3000", "127.0.0.1", () => {
    console.log('start-port:3000')
});

