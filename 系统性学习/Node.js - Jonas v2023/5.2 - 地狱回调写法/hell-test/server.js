const fs = require('fs');
const superagent = require('superagent');

/**
 * 地狱回调写法: 使用 `superagent` 库进行异步请求,在写入到本地
 *      注意: 生产环境尽量不使用此写法, 不容易维护
 */

// 1. 读取请求入参
fs.readFile('start.txt',"utf-8", (error, data) => {
    if(error) {
        console.log('error', error)
        return ;
    } 
    console.log('loading...')
    // 2. 异步请求
    superagent.get(`https://robohash.org/${data}`).end( ( error, res ) => {
        if(error){
            console.log('error', error)
            return ;
        }

        // 3. 将请求结果写入本地
        fs.writeFile( "end.png", res.body, (error) => {
            if(error){
                console.log('error', error)
            }
            console.log('success')
        } )
    } )

})