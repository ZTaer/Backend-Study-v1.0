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

// 地狱回调使用Promises then catch代替
readFilePro( "start.txt" )
.then( data => {
    console.log('loading...')
     return superagent.get(`https://robohash.org/${data}`)
} )
.then( res => {
    return writeFilePro( "end.png", res.body );
} )
.then( () => {
    console.log('success')
} ) 
.catch(error => {
    console.log('error', error)
})