const http = require('http');
const url = require('url'); // 注意: 引用url此库,才能在req中有url相关逻辑

const server = http.createServer( ( req,res ) => {
    // 查看访问的url
    console.log('req.url', req.url)
    const pathName = req.url;

    // 简单的模拟路由
    if( pathName === "/" || pathName === "/overview"){
        // 返回数据
        res.end("this is index")
    } else if ( pathName === "/api" ) {
        res.end("api page");
    } else {
        // 改变数据响应类型为"html", 以及可改变状态码
        // 404状态码: 查无此页面服务呢
        res.writeHead(404,{
            'Content-Type': 'text/html',
            "my-own-header": "Hello, world!"
        });
        res.end("404 Not Found");
    }

} );


server.listen("3000","127.0.0.1", () => {
    console.log('监听3000端口')
} )