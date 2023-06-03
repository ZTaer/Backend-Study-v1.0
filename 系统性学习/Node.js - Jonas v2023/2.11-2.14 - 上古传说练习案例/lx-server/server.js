const fs = require('fs');
const express = require('express');
const path = require('path');

// 初始化express
const app = express();

// 获取数据
const allData = fs.readFileSync( path.join(__dirname,"data/data.json"), "utf-8")


/**
 * TODO: express配置静态文件目录 ( 等待笔记 )
 */
app.use(express.static(path.join(__dirname,"public")))


/**
 * TODO: express配置路由, 支持单页面应用程序 ( 等待笔记 )
 *      注意: 顺序很重要
 *      优先响应api接口, 非api路由则返回单页面应用程序
 */

// api: 请求全部数据 
app.get("/api/all-data",(req,res) => {

    if( !allData ){
        res.json({
            code: 400,
            message: "获取数据失败!",
            data: {}, 
        })
    }

    res.json({
        code: 200,
        data:  JSON.parse(allData), 
    })
})

// api: 请求指定id数据
app.get("/api/find-data",(req,res) => {
    const { id } = req.query;


    if( id ){
        // 根据id查询数据
        const findResult = JSON.parse(allData).filter( item => item.id == id);
        const result = (findResult instanceof Array && findResult.length > 0) ? findResult[0]: {}

        res.json({
            code: 200,
            data: result,
            message: "success"
        })
    } else {
        res.json({
            code: 400,
            data: {},
            message: "请输入正确id!"
        })
    }

})

// 配置单页面应用程序
app.get("*", (req, res) => {
    res.sendFile( path.join(__dirname,"public/index.html") )
})


app.listen(3000, () => {
    console.log('server listen 3000');
})