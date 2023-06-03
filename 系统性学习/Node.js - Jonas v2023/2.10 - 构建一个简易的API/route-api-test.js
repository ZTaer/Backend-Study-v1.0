const http = require('http');
const url = require('url'); // 注意: 引用url此库,才能在req中有url相关逻辑
const fs = require('fs');

const server = http.createServer( ( req,res ) => {
    // 查看访问的url
    console.log('req.url', req.url)
    const pathName = req.url;

    // 简单的模拟路由
    if( pathName === "/" || pathName === "/overview"){
        res.end("this is index")
    } else if ( pathName === "/api" ) {

        /**
         * TODO: Object类型加工返回 ( 完成笔记 )
         *      JSON.stringify()加工后才能被res.end正常返回数据
         */
        const data = JSON.stringify({
            "code": 200,
            "data": "success"
        });


        /**
         * TODO: 改变数据响应类型为"json", 以及可改变状态码 ( 完成笔记 )
         *      200状态码: 请求成功     
         */
        res.writeHead(200, {
            'Content-Type': 'application/json'
        })
        res.end( data );

    } else if ( pathName === "/api/file" ) {

        /**
         * TODO: 异步读取json文件, 并返回数据 ( 完成笔记 ) 
         */
        fs.readFile( "./data.json", "utf8", (error, file) => {
            if(error){
                console.log('error', error)
            }


            /**
             * TODO: 字符串类型加工返回 ( 完成笔记 )
             *      JSON.stringify()加工变为json序列号格式
             *      JSON.parse()解析后才能正常返回数据
             */
            const data = JSON.parse(JSON.stringify(file));

            res.writeHead(200,{
                'Content-Type': 'application/json'
            })
            res.end(data);

        } )        

    } 
    else {
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