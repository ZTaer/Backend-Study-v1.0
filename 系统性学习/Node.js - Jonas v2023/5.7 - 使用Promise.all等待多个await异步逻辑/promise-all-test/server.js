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

// 使用Promise.all等待多个await异步逻辑
const handleAsynGet = async () => {
    try{
        const urlProps = await readFilePro("start.txt");
        console.log('loading...')
        const res1 = superagent.get(`https://robohash.org/${urlProps}-1`)
        const res2 = superagent.get(`https://robohash.org/${urlProps}-2`)
        const res3 = superagent.get(`https://robohash.org/${urlProps}-3`)

        const allRes = await Promise.all([ res1, res2, res3 ]) // 同时请求多个异步逻辑

        // 将请求结果分别输出
        allRes.forEach( async (res,index) => {
            await writeFilePro( `end-${index+1}.png`, res.body )
            console.log('success',index+1)
        } )

    }catch(error){
        console.log('error', error)
    }
}

handleAsynGet();




