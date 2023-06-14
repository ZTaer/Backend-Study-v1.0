const fs = require('fs');
const superagent = require('superagent');

// 下方改写方式依然具有参考性: 可以将这种改写方式应用在其他不支持promises的异步方法上
const readFilePro = ( file ) => {
    return new Promise((resolve, reject) => {
        fs.readFile( file, "utf-8", (error, data) => {
            if(error){
                console.log('error', error)
                reject(false);
            }
            resolve(data);
        } )
    })
};

const writeFilePro = ( file, data ) => {
    return new Promise((resolve, reject) => {
        fs.writeFile( file, data, (error) => {
            if(error){
                console.log('error', error)
                reject(false);
            }
            resolve(true);
        } ) 
    });
}

// 地狱回调使用Promises async await代替
// 测试async await异步逻辑执行顺序
console.log('start - 1')
const handleAsynGet = async () => {
    try{
        const urlProps = await readFilePro("start.txt");
        console.log('loading... - 2')
        const res = await superagent.get(`https://robohash.org/${urlProps}`)
        await writeFilePro( "end.png", res.body )
        console.log('success - 3')
    }catch(error){
        console.log('error', error)
    }
}
console.log('end - 4')

handleAsynGet();




